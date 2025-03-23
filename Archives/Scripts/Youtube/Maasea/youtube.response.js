// https://raw.githubusercontent.com/Maasea/sgmodule/refs/heads/master/Script/Youtube/youtube.response.js
// Author @Maasea
// Build: 2025/3/9 17:46:25
(() => {
  var Xr = Object.defineProperty;
  var Yr = (l, e, t) =>
    e in l
      ? Xr(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (l[e] = t);
  var de = (l, e, t) => (Yr(l, typeof e != "symbol" ? e + "" : e, t), t);
  (function (l) {
    function e() {}
    function t() {}
    var n = String.fromCharCode,
      i = {}.toString,
      r = i.call(l.SharedArrayBuffer),
      c = i(),
      o = l.Uint8Array,
      s = o || Array,
      a = o ? ArrayBuffer : s,
      d =
        a.isView ||
        function (B) {
          return B && "length" in B;
        },
      g = i.call(a.prototype);
    a = t.prototype;
    var b = l.TextEncoder,
      m = new (o ? Uint16Array : s)(32);
    (e.prototype.decode = function (B) {
      if (!d(B)) {
        var D = i.call(B);
        if (D !== g && D !== r && D !== c)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'",
          );
        B = o ? new s(B) : B || [];
      }
      for (
        var x = (D = ""),
          k = 0,
          I = B.length | 0,
          ce = (I - 32) | 0,
          U,
          S,
          L = 0,
          X = 0,
          M,
          $ = 0,
          j = -1;
        k < I;

      ) {
        for (
          U = k <= ce ? 32 : (I - k) | 0;
          $ < U;
          k = (k + 1) | 0, $ = ($ + 1) | 0
        ) {
          switch (((S = B[k] & 255), S >> 4)) {
            case 15:
              if (((M = B[(k = (k + 1) | 0)] & 255), M >> 6 !== 2 || 247 < S)) {
                k = (k - 1) | 0;
                break;
              }
              (L = ((S & 7) << 6) | (M & 63)), (X = 5), (S = 256);
            case 14:
              (M = B[(k = (k + 1) | 0)] & 255),
                (L <<= 6),
                (L |= ((S & 15) << 6) | (M & 63)),
                (X = M >> 6 === 2 ? (X + 4) | 0 : 24),
                (S = (S + 256) & 768);
            case 13:
            case 12:
              (M = B[(k = (k + 1) | 0)] & 255),
                (L <<= 6),
                (L |= ((S & 31) << 6) | (M & 63)),
                (X = (X + 7) | 0),
                k < I && M >> 6 === 2 && L >> X && 1114112 > L
                  ? ((S = L),
                    (L = (L - 65536) | 0),
                    0 <= L &&
                      ((j = ((L >> 10) + 55296) | 0),
                      (S = ((L & 1023) + 56320) | 0),
                      31 > $
                        ? ((m[$] = j), ($ = ($ + 1) | 0), (j = -1))
                        : ((M = j), (j = S), (S = M))))
                  : ((S >>= 8), (k = (k - S - 1) | 0), (S = 65533)),
                (L = X = 0),
                (U = k <= ce ? 32 : (I - k) | 0);
            default:
              m[$] = S;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          m[$] = 65533;
        }
        if (
          ((x += n(
            m[0],
            m[1],
            m[2],
            m[3],
            m[4],
            m[5],
            m[6],
            m[7],
            m[8],
            m[9],
            m[10],
            m[11],
            m[12],
            m[13],
            m[14],
            m[15],
            m[16],
            m[17],
            m[18],
            m[19],
            m[20],
            m[21],
            m[22],
            m[23],
            m[24],
            m[25],
            m[26],
            m[27],
            m[28],
            m[29],
            m[30],
            m[31],
          )),
          32 > $ && (x = x.slice(0, ($ - 32) | 0)),
          k < I)
        ) {
          if (((m[0] = j), ($ = ~j >>> 31), (j = -1), x.length < D.length))
            continue;
        } else j !== -1 && (x += n(j));
        (D += x), (x = "");
      }
      return D;
    }),
      (a.encode = function (B) {
        B = B === void 0 ? "" : "" + B;
        var D = B.length | 0,
          x = new s(((D << 1) + 8) | 0),
          k,
          I = 0,
          ce = !o;
        for (k = 0; k < D; k = (k + 1) | 0, I = (I + 1) | 0) {
          var U = B.charCodeAt(k) | 0;
          if (127 >= U) x[I] = U;
          else {
            if (2047 >= U) x[I] = 192 | (U >> 6);
            else {
              e: {
                if (55296 <= U)
                  if (56319 >= U) {
                    var S = B.charCodeAt((k = (k + 1) | 0)) | 0;
                    if (56320 <= S && 57343 >= S) {
                      if (((U = ((U << 10) + S - 56613888) | 0), 65535 < U)) {
                        (x[I] = 240 | (U >> 18)),
                          (x[(I = (I + 1) | 0)] = 128 | ((U >> 12) & 63)),
                          (x[(I = (I + 1) | 0)] = 128 | ((U >> 6) & 63)),
                          (x[(I = (I + 1) | 0)] = 128 | (U & 63));
                        continue;
                      }
                      break e;
                    }
                    U = 65533;
                  } else 57343 >= U && (U = 65533);
                !ce &&
                  k << 1 < I &&
                  k << 1 < ((I - 7) | 0) &&
                  ((ce = !0), (S = new s(3 * D)), S.set(x), (x = S));
              }
              (x[I] = 224 | (U >> 12)),
                (x[(I = (I + 1) | 0)] = 128 | ((U >> 6) & 63));
            }
            x[(I = (I + 1) | 0)] = 128 | (U & 63);
          }
        }
        return o ? x.subarray(0, I) : x.slice(0, I);
      }),
      b || ((l.TextDecoder = e), (l.TextEncoder = t));
  })(globalThis);
  function Re(l) {
    let e = typeof l;
    if (e == "object") {
      if (Array.isArray(l)) return "array";
      if (l === null) return "null";
    }
    return e;
  }
  function gr(l) {
    return l !== null && typeof l == "object" && !Array.isArray(l);
  }
  var A =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        "",
      ),
    we = [];
  for (let l = 0; l < A.length; l++) we[A[l].charCodeAt(0)] = l;
  we["-".charCodeAt(0)] = A.indexOf("+");
  we["_".charCodeAt(0)] = A.indexOf("/");
  function br(l) {
    let e = (l.length * 3) / 4;
    l[l.length - 2] == "=" ? (e -= 2) : l[l.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e),
      n = 0,
      i = 0,
      r,
      c = 0;
    for (let o = 0; o < l.length; o++) {
      if (((r = we[l.charCodeAt(o)]), r === void 0))
        switch (l[o]) {
          case "=":
            i = 0;
          case `
`:
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      switch (i) {
        case 0:
          (c = r), (i = 1);
          break;
        case 1:
          (t[n++] = (c << 2) | ((r & 48) >> 4)), (c = r), (i = 2);
          break;
        case 2:
          (t[n++] = ((c & 15) << 4) | ((r & 60) >> 2)), (c = r), (i = 3);
          break;
        case 3:
          (t[n++] = ((c & 3) << 6) | r), (i = 0);
          break;
      }
    }
    if (i == 1) throw Error("invalid base64 string.");
    return t.subarray(0, n);
  }
  function kr(l) {
    let e = "",
      t = 0,
      n,
      i = 0;
    for (let r = 0; r < l.length; r++)
      switch (((n = l[r]), t)) {
        case 0:
          (e += A[n >> 2]), (i = (n & 3) << 4), (t = 1);
          break;
        case 1:
          (e += A[i | (n >> 4)]), (i = (n & 15) << 2), (t = 2);
          break;
        case 2:
          (e += A[i | (n >> 6)]), (e += A[n & 63]), (t = 0);
          break;
      }
    return t && ((e += A[i]), (e += "="), t == 1 && (e += "=")), e;
  }
  var f;
  (function (l) {
    (l.symbol = Symbol.for("protobuf-ts/unknown")),
      (l.onRead = (t, n, i, r, c) => {
        (e(n) ? n[l.symbol] : (n[l.symbol] = [])).push({
          no: i,
          wireType: r,
          data: c,
        });
      }),
      (l.onWrite = (t, n, i) => {
        for (let { no: r, wireType: c, data: o } of l.list(n))
          i.tag(r, c).raw(o);
      }),
      (l.list = (t, n) => {
        if (e(t)) {
          let i = t[l.symbol];
          return n ? i.filter((r) => r.no == n) : i;
        }
        return [];
      }),
      (l.last = (t, n) => l.list(t, n).slice(-1)[0]);
    let e = (t) => t && Array.isArray(t[l.symbol]);
  })(f || (f = {}));
  var u;
  (function (l) {
    (l[(l.Varint = 0)] = "Varint"),
      (l[(l.Bit64 = 1)] = "Bit64"),
      (l[(l.LengthDelimited = 2)] = "LengthDelimited"),
      (l[(l.StartGroup = 3)] = "StartGroup"),
      (l[(l.EndGroup = 4)] = "EndGroup"),
      (l[(l.Bit32 = 5)] = "Bit32");
  })(u || (u = {}));
  function Rr() {
    let l = 0,
      e = 0;
    for (let n = 0; n < 28; n += 7) {
      let i = this.buf[this.pos++];
      if (((l |= (i & 127) << n), !(i & 128)))
        return this.assertBounds(), [l, e];
    }
    let t = this.buf[this.pos++];
    if (((l |= (t & 15) << 28), (e = (t & 112) >> 4), !(t & 128)))
      return this.assertBounds(), [l, e];
    for (let n = 3; n <= 31; n += 7) {
      let i = this.buf[this.pos++];
      if (((e |= (i & 127) << n), !(i & 128)))
        return this.assertBounds(), [l, e];
    }
    throw new Error("invalid varint");
  }
  function Te(l, e, t) {
    for (let r = 0; r < 28; r = r + 7) {
      let c = l >>> r,
        o = !(!(c >>> 7) && e == 0),
        s = (o ? c | 128 : c) & 255;
      if ((t.push(s), !o)) return;
    }
    let n = ((l >>> 28) & 15) | ((e & 7) << 4),
      i = !!(e >> 3);
    if ((t.push((i ? n | 128 : n) & 255), !!i)) {
      for (let r = 3; r < 31; r = r + 7) {
        let c = e >>> r,
          o = !!(c >>> 7),
          s = (o ? c | 128 : c) & 255;
        if ((t.push(s), !o)) return;
      }
      t.push((e >>> 31) & 1);
    }
  }
  var Be = (1 << 16) * (1 << 16);
  function Ge(l) {
    let e = l[0] == "-";
    e && (l = l.slice(1));
    let t = 1e6,
      n = 0,
      i = 0;
    function r(c, o) {
      let s = Number(l.slice(c, o));
      (i *= t),
        (n = n * t + s),
        n >= Be && ((i = i + ((n / Be) | 0)), (n = n % Be));
    }
    return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, n, i];
  }
  function Ie(l, e) {
    if (e >>> 0 <= 2097151) return "" + (Be * e + (l >>> 0));
    let t = l & 16777215,
      n = (((l >>> 24) | (e << 8)) >>> 0) & 16777215,
      i = (e >> 16) & 65535,
      r = t + n * 6777216 + i * 6710656,
      c = n + i * 8147497,
      o = i * 2,
      s = 1e7;
    r >= s && ((c += Math.floor(r / s)), (r %= s)),
      c >= s && ((o += Math.floor(c / s)), (c %= s));
    function a(d, g) {
      let b = d ? String(d) : "";
      return g ? "0000000".slice(b.length) + b : b;
    }
    return a(o, 0) + a(c, o) + a(r, 1);
  }
  function Ke(l, e) {
    if (l >= 0) {
      for (; l > 127; ) e.push((l & 127) | 128), (l = l >>> 7);
      e.push(l);
    } else {
      for (let t = 0; t < 9; t++) e.push((l & 127) | 128), (l = l >> 7);
      e.push(1);
    }
  }
  function wr() {
    let l = this.buf[this.pos++],
      e = l & 127;
    if (!(l & 128)) return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 7), !(l & 128)))
      return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 14), !(l & 128)))
      return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 21), !(l & 128)))
      return this.assertBounds(), e;
    (l = this.buf[this.pos++]), (e |= (l & 15) << 28);
    for (let t = 5; l & 128 && t < 10; t++) l = this.buf[this.pos++];
    if (l & 128) throw new Error("invalid varint");
    return this.assertBounds(), e >>> 0;
  }
  var N;
  function qr() {
    let l = new DataView(new ArrayBuffer(8));
    N =
      globalThis.BigInt !== void 0 &&
      typeof l.getBigInt64 == "function" &&
      typeof l.getBigUint64 == "function" &&
      typeof l.setBigInt64 == "function" &&
      typeof l.setBigUint64 == "function"
        ? {
            MIN: BigInt("-9223372036854775808"),
            MAX: BigInt("9223372036854775807"),
            UMIN: BigInt("0"),
            UMAX: BigInt("18446744073709551615"),
            C: BigInt,
            V: l,
          }
        : void 0;
  }
  qr();
  function Br(l) {
    if (!l)
      throw new Error(
        "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support",
      );
  }
  var Tr = /^-?[0-9]+$/,
    We = 4294967296,
    Ne = 2147483648,
    xe = class {
      constructor(e, t) {
        (this.lo = e | 0), (this.hi = t | 0);
      }
      isZero() {
        return this.lo == 0 && this.hi == 0;
      }
      toNumber() {
        let e = this.hi * We + (this.lo >>> 0);
        if (!Number.isSafeInteger(e))
          throw new Error("cannot convert to safe number");
        return e;
      }
    },
    P = class extends xe {
      static from(e) {
        if (N)
          switch (typeof e) {
            case "string":
              if (e == "0") return this.ZERO;
              if (e == "") throw new Error("string is no integer");
              e = N.C(e);
            case "number":
              if (e === 0) return this.ZERO;
              e = N.C(e);
            case "bigint":
              if (!e) return this.ZERO;
              if (e < N.UMIN) throw new Error("signed value for ulong");
              if (e > N.UMAX) throw new Error("ulong too large");
              return (
                N.V.setBigUint64(0, e, !0),
                new P(N.V.getInt32(0, !0), N.V.getInt32(4, !0))
              );
          }
        else
          switch (typeof e) {
            case "string":
              if (e == "0") return this.ZERO;
              if (((e = e.trim()), !Tr.test(e)))
                throw new Error("string is no integer");
              let [t, n, i] = Ge(e);
              if (t) throw new Error("signed value for ulong");
              return new P(n, i);
            case "number":
              if (e == 0) return this.ZERO;
              if (!Number.isSafeInteger(e))
                throw new Error("number is no integer");
              if (e < 0) throw new Error("signed value for ulong");
              return new P(e, e / We);
          }
        throw new Error("unknown value " + typeof e);
      }
      toString() {
        return N ? this.toBigInt().toString() : Ie(this.lo, this.hi);
      }
      toBigInt() {
        return (
          Br(N),
          N.V.setInt32(0, this.lo, !0),
          N.V.setInt32(4, this.hi, !0),
          N.V.getBigUint64(0, !0)
        );
      }
    };
  P.ZERO = new P(0, 0);
  var T = class extends xe {
    static from(e) {
      if (N)
        switch (typeof e) {
          case "string":
            if (e == "0") return this.ZERO;
            if (e == "") throw new Error("string is no integer");
            e = N.C(e);
          case "number":
            if (e === 0) return this.ZERO;
            e = N.C(e);
          case "bigint":
            if (!e) return this.ZERO;
            if (e < N.MIN) throw new Error("signed long too small");
            if (e > N.MAX) throw new Error("signed long too large");
            return (
              N.V.setBigInt64(0, e, !0),
              new T(N.V.getInt32(0, !0), N.V.getInt32(4, !0))
            );
        }
      else
        switch (typeof e) {
          case "string":
            if (e == "0") return this.ZERO;
            if (((e = e.trim()), !Tr.test(e)))
              throw new Error("string is no integer");
            let [t, n, i] = Ge(e);
            if (t) {
              if (i > Ne || (i == Ne && n != 0))
                throw new Error("signed long too small");
            } else if (i >= Ne) throw new Error("signed long too large");
            let r = new T(n, i);
            return t ? r.negate() : r;
          case "number":
            if (e == 0) return this.ZERO;
            if (!Number.isSafeInteger(e))
              throw new Error("number is no integer");
            return e > 0 ? new T(e, e / We) : new T(-e, -e / We).negate();
        }
      throw new Error("unknown value " + typeof e);
    }
    isNegative() {
      return (this.hi & Ne) !== 0;
    }
    negate() {
      let e = ~this.hi,
        t = this.lo;
      return t ? (t = ~t + 1) : (e += 1), new T(t, e);
    }
    toString() {
      if (N) return this.toBigInt().toString();
      if (this.isNegative()) {
        let e = this.negate();
        return "-" + Ie(e.lo, e.hi);
      }
      return Ie(this.lo, this.hi);
    }
    toBigInt() {
      return (
        Br(N),
        N.V.setInt32(0, this.lo, !0),
        N.V.setInt32(4, this.hi, !0),
        N.V.getBigInt64(0, !0)
      );
    }
  };
  T.ZERO = new T(0, 0);
  var Ir = { readUnknownField: !0, readerFactory: (l) => new Je(l) };
  function Nr(l) {
    return l ? Object.assign(Object.assign({}, Ir), l) : Ir;
  }
  var Je = class {
    constructor(e, t) {
      (this.varint64 = Rr),
        (this.uint32 = wr),
        (this.buf = e),
        (this.len = e.length),
        (this.pos = 0),
        (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (this.textDecoder =
          t ?? new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }));
    }
    tag() {
      let e = this.uint32(),
        t = e >>> 3,
        n = e & 7;
      if (t <= 0 || n < 0 || n > 5)
        throw new Error("illegal tag: field no " + t + " wire type " + n);
      return [t, n];
    }
    skip(e) {
      let t = this.pos;
      switch (e) {
        case u.Varint:
          for (; this.buf[this.pos++] & 128; );
          break;
        case u.Bit64:
          this.pos += 4;
        case u.Bit32:
          this.pos += 4;
          break;
        case u.LengthDelimited:
          let n = this.uint32();
          this.pos += n;
          break;
        case u.StartGroup:
          let i;
          for (; (i = this.tag()[1]) !== u.EndGroup; ) this.skip(i);
          break;
        default:
          throw new Error("cant skip wire type " + e);
      }
      return this.assertBounds(), this.buf.subarray(t, this.pos);
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
      return new T(...this.varint64());
    }
    uint64() {
      return new P(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        n = -(e & 1);
      return (
        (e = ((e >>> 1) | ((t & 1) << 31)) ^ n),
        (t = (t >>> 1) ^ n),
        new T(e, t)
      );
    }
    bool() {
      let [e, t] = this.varint64();
      return e !== 0 || t !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return new P(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return new T(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        t = this.pos;
      return (this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e);
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  };
  function R(l, e) {
    if (!l) throw new Error(e);
  }
  var Zr = 34028234663852886e22,
    zr = -34028234663852886e22,
    Hr = 4294967295,
    Qr = 2147483647,
    ei = -2147483648;
  function K(l) {
    if (typeof l != "number") throw new Error("invalid int 32: " + typeof l);
    if (!Number.isInteger(l) || l > Qr || l < ei)
      throw new Error("invalid int 32: " + l);
  }
  function Y(l) {
    if (typeof l != "number") throw new Error("invalid uint 32: " + typeof l);
    if (!Number.isInteger(l) || l > Hr || l < 0)
      throw new Error("invalid uint 32: " + l);
  }
  function H(l) {
    if (typeof l != "number") throw new Error("invalid float 32: " + typeof l);
    if (Number.isFinite(l) && (l > Zr || l < zr))
      throw new Error("invalid float 32: " + l);
  }
  var Wr = { writeUnknownFields: !0, writerFactory: () => new _e() };
  function xr(l) {
    return l ? Object.assign(Object.assign({}, Wr), l) : Wr;
  }
  var _e = class {
    constructor(e) {
      (this.stack = []),
        (this.textEncoder = e ?? new TextEncoder()),
        (this.chunks = []),
        (this.buf = []);
    }
    finish() {
      this.chunks.push(new Uint8Array(this.buf));
      let e = 0;
      for (let i = 0; i < this.chunks.length; i++) e += this.chunks[i].length;
      let t = new Uint8Array(e),
        n = 0;
      for (let i = 0; i < this.chunks.length; i++)
        t.set(this.chunks[i], n), (n += this.chunks[i].length);
      return (this.chunks = []), t;
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
        t = this.stack.pop();
      if (!t) throw new Error("invalid state, fork stack empty");
      return (
        (this.chunks = t.chunks),
        (this.buf = t.buf),
        this.uint32(e.byteLength),
        this.raw(e)
      );
    }
    tag(e, t) {
      return this.uint32(((e << 3) | t) >>> 0);
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
      for (Y(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
      return this.buf.push(e), this;
    }
    int32(e) {
      return K(e), Ke(e, this.buf), this;
    }
    bool(e) {
      return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
      return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
      let t = this.textEncoder.encode(e);
      return this.uint32(t.byteLength), this.raw(t);
    }
    float(e) {
      H(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
    }
    double(e) {
      let t = new Uint8Array(8);
      return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
    }
    fixed32(e) {
      Y(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
    }
    sfixed32(e) {
      K(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
    }
    sint32(e) {
      return K(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), Ke(e, this.buf), this;
    }
    sfixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        i = T.from(e);
      return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t);
    }
    fixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        i = P.from(e);
      return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t);
    }
    int64(e) {
      let t = T.from(e);
      return Te(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
      let t = T.from(e),
        n = t.hi >> 31,
        i = (t.lo << 1) ^ n,
        r = ((t.hi << 1) | (t.lo >>> 31)) ^ n;
      return Te(i, r, this.buf), this;
    }
    uint64(e) {
      let t = P.from(e);
      return Te(t.lo, t.hi, this.buf), this;
    }
  };
  var Sr = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    },
    Pr = { ignoreUnknownFields: !1 };
  function Or(l) {
    return l ? Object.assign(Object.assign({}, Pr), l) : Pr;
  }
  function Ur(l) {
    return l ? Object.assign(Object.assign({}, Sr), l) : Sr;
  }
  var Se = Symbol.for("protobuf-ts/message-type");
  function Xe(l) {
    let e = !1,
      t = [];
    for (let n = 0; n < l.length; n++) {
      let i = l.charAt(n);
      i == "_"
        ? (e = !0)
        : /\d/.test(i)
        ? (t.push(i), (e = !0))
        : e
        ? (t.push(i.toUpperCase()), (e = !1))
        : n == 0
        ? t.push(i.toLowerCase())
        : t.push(i);
    }
    return t.join("");
  }
  var p;
  (function (l) {
    (l[(l.DOUBLE = 1)] = "DOUBLE"),
      (l[(l.FLOAT = 2)] = "FLOAT"),
      (l[(l.INT64 = 3)] = "INT64"),
      (l[(l.UINT64 = 4)] = "UINT64"),
      (l[(l.INT32 = 5)] = "INT32"),
      (l[(l.FIXED64 = 6)] = "FIXED64"),
      (l[(l.FIXED32 = 7)] = "FIXED32"),
      (l[(l.BOOL = 8)] = "BOOL"),
      (l[(l.STRING = 9)] = "STRING"),
      (l[(l.BYTES = 12)] = "BYTES"),
      (l[(l.UINT32 = 13)] = "UINT32"),
      (l[(l.SFIXED32 = 15)] = "SFIXED32"),
      (l[(l.SFIXED64 = 16)] = "SFIXED64"),
      (l[(l.SINT32 = 17)] = "SINT32"),
      (l[(l.SINT64 = 18)] = "SINT64");
  })(p || (p = {}));
  var E;
  (function (l) {
    (l[(l.BIGINT = 0)] = "BIGINT"),
      (l[(l.STRING = 1)] = "STRING"),
      (l[(l.NUMBER = 2)] = "NUMBER");
  })(E || (E = {}));
  var ue;
  (function (l) {
    (l[(l.NO = 0)] = "NO"),
      (l[(l.PACKED = 1)] = "PACKED"),
      (l[(l.UNPACKED = 2)] = "UNPACKED");
  })(ue || (ue = {}));
  function Cr(l) {
    var e, t, n, i;
    return (
      (l.localName =
        (e = l.localName) !== null && e !== void 0 ? e : Xe(l.name)),
      (l.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : Xe(l.name)),
      (l.repeat = (n = l.repeat) !== null && n !== void 0 ? n : ue.NO),
      (l.opt =
        (i = l.opt) !== null && i !== void 0
          ? i
          : l.repeat || l.oneof
          ? !1
          : l.kind == "message"),
      l
    );
  }
  function Er(l) {
    if (typeof l != "object" || l === null || !l.hasOwnProperty("oneofKind"))
      return !1;
    switch (typeof l.oneofKind) {
      case "string":
        return l[l.oneofKind] === void 0 ? !1 : Object.keys(l).length == 2;
      case "undefined":
        return Object.keys(l).length == 1;
      default:
        return !1;
    }
  }
  var Pe = class {
    constructor(e) {
      var t;
      this.fields = (t = e.fields) !== null && t !== void 0 ? t : [];
    }
    prepare() {
      if (this.data) return;
      let e = [],
        t = [],
        n = [];
      for (let i of this.fields)
        if (i.oneof)
          n.includes(i.oneof) ||
            (n.push(i.oneof), e.push(i.oneof), t.push(i.oneof));
        else
          switch ((t.push(i.localName), i.kind)) {
            case "scalar":
            case "enum":
              (!i.opt || i.repeat) && e.push(i.localName);
              break;
            case "message":
              i.repeat && e.push(i.localName);
              break;
            case "map":
              e.push(i.localName);
              break;
          }
      this.data = { req: e, known: t, oneofs: Object.values(n) };
    }
    is(e, t, n = !1) {
      if (t < 0) return !0;
      if (e == null || typeof e != "object") return !1;
      this.prepare();
      let i = Object.keys(e),
        r = this.data;
      if (
        i.length < r.req.length ||
        r.req.some((c) => !i.includes(c)) ||
        (!n && i.some((c) => !r.known.includes(c)))
      )
        return !1;
      if (t < 1) return !0;
      for (let c of r.oneofs) {
        let o = e[c];
        if (!Er(o)) return !1;
        if (o.oneofKind === void 0) continue;
        let s = this.fields.find((a) => a.localName === o.oneofKind);
        if (!s || !this.field(o[o.oneofKind], s, n, t)) return !1;
      }
      for (let c of this.fields)
        if (c.oneof === void 0 && !this.field(e[c.localName], c, n, t))
          return !1;
      return !0;
    }
    field(e, t, n, i) {
      let r = t.repeat;
      switch (t.kind) {
        case "scalar":
          return e === void 0
            ? t.opt
            : r
            ? this.scalars(e, t.T, i, t.L)
            : this.scalar(e, t.T, t.L);
        case "enum":
          return e === void 0
            ? t.opt
            : r
            ? this.scalars(e, p.INT32, i)
            : this.scalar(e, p.INT32);
        case "message":
          return e === void 0
            ? !0
            : r
            ? this.messages(e, t.T(), n, i)
            : this.message(e, t.T(), n, i);
        case "map":
          if (typeof e != "object" || e === null) return !1;
          if (i < 2) return !0;
          if (!this.mapKeys(e, t.K, i)) return !1;
          switch (t.V.kind) {
            case "scalar":
              return this.scalars(Object.values(e), t.V.T, i, t.V.L);
            case "enum":
              return this.scalars(Object.values(e), p.INT32, i);
            case "message":
              return this.messages(Object.values(e), t.V.T(), n, i);
          }
          break;
      }
      return !0;
    }
    message(e, t, n, i) {
      return n ? t.isAssignable(e, i) : t.is(e, i);
    }
    messages(e, t, n, i) {
      if (!Array.isArray(e)) return !1;
      if (i < 2) return !0;
      if (n) {
        for (let r = 0; r < e.length && r < i; r++)
          if (!t.isAssignable(e[r], i - 1)) return !1;
      } else
        for (let r = 0; r < e.length && r < i; r++)
          if (!t.is(e[r], i - 1)) return !1;
      return !0;
    }
    scalar(e, t, n) {
      let i = typeof e;
      switch (t) {
        case p.UINT64:
        case p.FIXED64:
        case p.INT64:
        case p.SFIXED64:
        case p.SINT64:
          switch (n) {
            case E.BIGINT:
              return i == "bigint";
            case E.NUMBER:
              return i == "number" && !isNaN(e);
            default:
              return i == "string";
          }
        case p.BOOL:
          return i == "boolean";
        case p.STRING:
          return i == "string";
        case p.BYTES:
          return e instanceof Uint8Array;
        case p.DOUBLE:
        case p.FLOAT:
          return i == "number" && !isNaN(e);
        default:
          return i == "number" && Number.isInteger(e);
      }
    }
    scalars(e, t, n, i) {
      if (!Array.isArray(e)) return !1;
      if (n < 2) return !0;
      if (Array.isArray(e)) {
        for (let r = 0; r < e.length && r < n; r++)
          if (!this.scalar(e[r], t, i)) return !1;
      }
      return !0;
    }
    mapKeys(e, t, n) {
      let i = Object.keys(e);
      switch (t) {
        case p.INT32:
        case p.FIXED32:
        case p.SFIXED32:
        case p.SINT32:
        case p.UINT32:
          return this.scalars(
            i.slice(0, n).map((r) => parseInt(r)),
            t,
            n,
          );
        case p.BOOL:
          return this.scalars(
            i
              .slice(0, n)
              .map((r) => (r == "true" ? !0 : r == "false" ? !1 : r)),
            t,
            n,
          );
        default:
          return this.scalars(i, t, n, E.STRING);
      }
    }
  };
  function F(l, e) {
    switch (e) {
      case E.BIGINT:
        return l.toBigInt();
      case E.NUMBER:
        return l.toNumber();
      default:
        return l.toString();
    }
  }
  var Oe = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (this.fMap === void 0) {
        this.fMap = {};
        let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
        for (let n of t)
          (this.fMap[n.name] = n),
            (this.fMap[n.jsonName] = n),
            (this.fMap[n.localName] = n);
      }
    }
    assert(e, t, n) {
      if (!e) {
        let i = Re(n);
        throw (
          ((i == "number" || i == "boolean") && (i = n.toString()),
          new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${t}`))
        );
      }
    }
    read(e, t, n) {
      this.prepare();
      let i = [];
      for (let [r, c] of Object.entries(e)) {
        let o = this.fMap[r];
        if (!o) {
          if (!n.ignoreUnknownFields)
            throw new Error(
              `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`,
            );
          continue;
        }
        let s = o.localName,
          a;
        if (o.oneof) {
          if (
            c === null &&
            (o.kind !== "enum" || o.T()[0] !== "google.protobuf.NullValue")
          )
            continue;
          if (i.includes(o.oneof))
            throw new Error(
              `Multiple members of the oneof group "${o.oneof}" of ${this.info.typeName} are present in JSON.`,
            );
          i.push(o.oneof), (a = t[o.oneof] = { oneofKind: s });
        } else a = t;
        if (o.kind == "map") {
          if (c === null) continue;
          this.assert(gr(c), o.name, c);
          let d = a[s];
          for (let [g, b] of Object.entries(c)) {
            this.assert(b !== null, o.name + " map value", null);
            let m;
            switch (o.V.kind) {
              case "message":
                m = o.V.T().internalJsonRead(b, n);
                break;
              case "enum":
                if (
                  ((m = this.enum(o.V.T(), b, o.name, n.ignoreUnknownFields)),
                  m === !1)
                )
                  continue;
                break;
              case "scalar":
                m = this.scalar(b, o.V.T, o.V.L, o.name);
                break;
            }
            this.assert(m !== void 0, o.name + " map value", b);
            let B = g;
            o.K == p.BOOL && (B = B == "true" ? !0 : B == "false" ? !1 : B),
              (B = this.scalar(B, o.K, E.STRING, o.name).toString()),
              (d[B] = m);
          }
        } else if (o.repeat) {
          if (c === null) continue;
          this.assert(Array.isArray(c), o.name, c);
          let d = a[s];
          for (let g of c) {
            this.assert(g !== null, o.name, null);
            let b;
            switch (o.kind) {
              case "message":
                b = o.T().internalJsonRead(g, n);
                break;
              case "enum":
                if (
                  ((b = this.enum(o.T(), g, o.name, n.ignoreUnknownFields)),
                  b === !1)
                )
                  continue;
                break;
              case "scalar":
                b = this.scalar(g, o.T, o.L, o.name);
                break;
            }
            this.assert(b !== void 0, o.name, c), d.push(b);
          }
        } else
          switch (o.kind) {
            case "message":
              if (c === null && o.T().typeName != "google.protobuf.Value") {
                this.assert(
                  o.oneof === void 0,
                  o.name + " (oneof member)",
                  null,
                );
                continue;
              }
              a[s] = o.T().internalJsonRead(c, n, a[s]);
              break;
            case "enum":
              let d = this.enum(o.T(), c, o.name, n.ignoreUnknownFields);
              if (d === !1) continue;
              a[s] = d;
              break;
            case "scalar":
              a[s] = this.scalar(c, o.T, o.L, o.name);
              break;
          }
      }
    }
    enum(e, t, n, i) {
      if (
        (e[0] == "google.protobuf.NullValue" &&
          R(
            t === null || t === "NULL_VALUE",
            `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`,
          ),
        t === null)
      )
        return 0;
      switch (typeof t) {
        case "number":
          return (
            R(
              Number.isInteger(t),
              `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`,
            ),
            t
          );
        case "string":
          let r = t;
          e[2] &&
            t.substring(0, e[2].length) === e[2] &&
            (r = t.substring(e[2].length));
          let c = e[1][r];
          return typeof c > "u" && i
            ? !1
            : (R(
                typeof c == "number",
                `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`,
              ),
              c);
      }
      R(
        !1,
        `Unable to parse field ${
          this.info.typeName
        }#${n}, cannot parse enum value from ${typeof t}".`,
      );
    }
    scalar(e, t, n, i) {
      let r;
      try {
        switch (t) {
          case p.DOUBLE:
          case p.FLOAT:
            if (e === null) return 0;
            if (e === "NaN") return Number.NaN;
            if (e === "Infinity") return Number.POSITIVE_INFINITY;
            if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (e === "") {
              r = "empty string";
              break;
            }
            if (typeof e == "string" && e.trim().length !== e.length) {
              r = "extra whitespace";
              break;
            }
            if (typeof e != "string" && typeof e != "number") break;
            let c = Number(e);
            if (Number.isNaN(c)) {
              r = "not a number";
              break;
            }
            if (!Number.isFinite(c)) {
              r = "too large or small";
              break;
            }
            return t == p.FLOAT && H(c), c;
          case p.INT32:
          case p.FIXED32:
          case p.SFIXED32:
          case p.SINT32:
          case p.UINT32:
            if (e === null) return 0;
            let o;
            if (
              (typeof e == "number"
                ? (o = e)
                : e === ""
                ? (r = "empty string")
                : typeof e == "string" &&
                  (e.trim().length !== e.length
                    ? (r = "extra whitespace")
                    : (o = Number(e))),
              o === void 0)
            )
              break;
            return t == p.UINT32 ? Y(o) : K(o), o;
          case p.INT64:
          case p.SFIXED64:
          case p.SINT64:
            if (e === null) return F(T.ZERO, n);
            if (typeof e != "number" && typeof e != "string") break;
            return F(T.from(e), n);
          case p.FIXED64:
          case p.UINT64:
            if (e === null) return F(P.ZERO, n);
            if (typeof e != "number" && typeof e != "string") break;
            return F(P.from(e), n);
          case p.BOOL:
            if (e === null) return !1;
            if (typeof e != "boolean") break;
            return e;
          case p.STRING:
            if (e === null) return "";
            if (typeof e != "string") {
              r = "extra whitespace";
              break;
            }
            try {
              encodeURIComponent(e);
            } catch (s) {
              s = "invalid UTF8";
              break;
            }
            return e;
          case p.BYTES:
            if (e === null || e === "") return new Uint8Array(0);
            if (typeof e != "string") break;
            return br(e);
        }
      } catch (c) {
        r = c.message;
      }
      this.assert(!1, i + (r ? " - " + r : ""), e);
    }
  };
  var Ue = class {
    constructor(e) {
      var t;
      this.fields = (t = e.fields) !== null && t !== void 0 ? t : [];
    }
    write(e, t) {
      let n = {},
        i = e;
      for (let r of this.fields) {
        if (!r.oneof) {
          let a = this.field(r, i[r.localName], t);
          a !== void 0 && (n[t.useProtoFieldName ? r.name : r.jsonName] = a);
          continue;
        }
        let c = i[r.oneof];
        if (c.oneofKind !== r.localName) continue;
        let o =
            r.kind == "scalar" || r.kind == "enum"
              ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 })
              : t,
          s = this.field(r, c[r.localName], o);
        R(s !== void 0), (n[t.useProtoFieldName ? r.name : r.jsonName] = s);
      }
      return n;
    }
    field(e, t, n) {
      let i;
      if (e.kind == "map") {
        R(typeof t == "object" && t !== null);
        let r = {};
        switch (e.V.kind) {
          case "scalar":
            for (let [s, a] of Object.entries(t)) {
              let d = this.scalar(e.V.T, a, e.name, !1, !0);
              R(d !== void 0), (r[s.toString()] = d);
            }
            break;
          case "message":
            let c = e.V.T();
            for (let [s, a] of Object.entries(t)) {
              let d = this.message(c, a, e.name, n);
              R(d !== void 0), (r[s.toString()] = d);
            }
            break;
          case "enum":
            let o = e.V.T();
            for (let [s, a] of Object.entries(t)) {
              R(a === void 0 || typeof a == "number");
              let d = this.enum(o, a, e.name, !1, !0, n.enumAsInteger);
              R(d !== void 0), (r[s.toString()] = d);
            }
            break;
        }
        (n.emitDefaultValues || Object.keys(r).length > 0) && (i = r);
      } else if (e.repeat) {
        R(Array.isArray(t));
        let r = [];
        switch (e.kind) {
          case "scalar":
            for (let s = 0; s < t.length; s++) {
              let a = this.scalar(e.T, t[s], e.name, e.opt, !0);
              R(a !== void 0), r.push(a);
            }
            break;
          case "enum":
            let c = e.T();
            for (let s = 0; s < t.length; s++) {
              R(t[s] === void 0 || typeof t[s] == "number");
              let a = this.enum(c, t[s], e.name, e.opt, !0, n.enumAsInteger);
              R(a !== void 0), r.push(a);
            }
            break;
          case "message":
            let o = e.T();
            for (let s = 0; s < t.length; s++) {
              let a = this.message(o, t[s], e.name, n);
              R(a !== void 0), r.push(a);
            }
            break;
        }
        (n.emitDefaultValues || r.length > 0 || n.emitDefaultValues) && (i = r);
      } else
        switch (e.kind) {
          case "scalar":
            i = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
            break;
          case "enum":
            i = this.enum(
              e.T(),
              t,
              e.name,
              e.opt,
              n.emitDefaultValues,
              n.enumAsInteger,
            );
            break;
          case "message":
            i = this.message(e.T(), t, e.name, n);
            break;
        }
      return i;
    }
    enum(e, t, n, i, r, c) {
      if (e[0] == "google.protobuf.NullValue") return !r && !i ? void 0 : null;
      if (t === void 0) {
        R(i);
        return;
      }
      if (!(t === 0 && !r && !i))
        return (
          R(typeof t == "number"),
          R(Number.isInteger(t)),
          c || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        );
    }
    message(e, t, n, i) {
      return t === void 0
        ? i.emitDefaultValues
          ? null
          : void 0
        : e.internalJsonWrite(t, i);
    }
    scalar(e, t, n, i, r) {
      if (t === void 0) {
        R(i);
        return;
      }
      let c = r || i;
      switch (e) {
        case p.INT32:
        case p.SFIXED32:
        case p.SINT32:
          return t === 0 ? (c ? 0 : void 0) : (K(t), t);
        case p.FIXED32:
        case p.UINT32:
          return t === 0 ? (c ? 0 : void 0) : (Y(t), t);
        case p.FLOAT:
          H(t);
        case p.DOUBLE:
          return t === 0
            ? c
              ? 0
              : void 0
            : (R(typeof t == "number"),
              Number.isNaN(t)
                ? "NaN"
                : t === Number.POSITIVE_INFINITY
                ? "Infinity"
                : t === Number.NEGATIVE_INFINITY
                ? "-Infinity"
                : t);
        case p.STRING:
          return t === "" ? (c ? "" : void 0) : (R(typeof t == "string"), t);
        case p.BOOL:
          return t === !1 ? (c ? !1 : void 0) : (R(typeof t == "boolean"), t);
        case p.UINT64:
        case p.FIXED64:
          R(
            typeof t == "number" ||
              typeof t == "string" ||
              typeof t == "bigint",
          );
          let o = P.from(t);
          return o.isZero() && !c ? void 0 : o.toString();
        case p.INT64:
        case p.SFIXED64:
        case p.SINT64:
          R(
            typeof t == "number" ||
              typeof t == "string" ||
              typeof t == "bigint",
          );
          let s = T.from(t);
          return s.isZero() && !c ? void 0 : s.toString();
        case p.BYTES:
          return (
            R(t instanceof Uint8Array), t.byteLength ? kr(t) : c ? "" : void 0
          );
      }
    }
  };
  function fe(l, e = E.STRING) {
    switch (l) {
      case p.BOOL:
        return !1;
      case p.UINT64:
      case p.FIXED64:
        return F(P.ZERO, e);
      case p.INT64:
      case p.SFIXED64:
      case p.SINT64:
        return F(T.ZERO, e);
      case p.DOUBLE:
      case p.FLOAT:
        return 0;
      case p.BYTES:
        return new Uint8Array(0);
      case p.STRING:
        return "";
      default:
        return 0;
    }
  }
  var Ce = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (!this.fieldNoToField) {
        let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
        this.fieldNoToField = new Map(t.map((n) => [n.no, n]));
      }
    }
    read(e, t, n, i) {
      this.prepare();
      let r = i === void 0 ? e.len : e.pos + i;
      for (; e.pos < r; ) {
        let [c, o] = e.tag(),
          s = this.fieldNoToField.get(c);
        if (!s) {
          let b = n.readUnknownField;
          if (b == "throw")
            throw new Error(
              `Unknown field ${c} (wire type ${o}) for ${this.info.typeName}`,
            );
          let m = e.skip(o);
          b !== !1 && (b === !0 ? f.onRead : b)(this.info.typeName, t, c, o, m);
          continue;
        }
        let a = t,
          d = s.repeat,
          g = s.localName;
        switch (
          (s.oneof &&
            ((a = a[s.oneof]),
            a.oneofKind !== g && (a = t[s.oneof] = { oneofKind: g })),
          s.kind)
        ) {
          case "scalar":
          case "enum":
            let b = s.kind == "enum" ? p.INT32 : s.T,
              m = s.kind == "scalar" ? s.L : void 0;
            if (d) {
              let x = a[g];
              if (o == u.LengthDelimited && b != p.STRING && b != p.BYTES) {
                let k = e.uint32() + e.pos;
                for (; e.pos < k; ) x.push(this.scalar(e, b, m));
              } else x.push(this.scalar(e, b, m));
            } else a[g] = this.scalar(e, b, m);
            break;
          case "message":
            if (d) {
              let x = a[g],
                k = s.T().internalBinaryRead(e, e.uint32(), n);
              x.push(k);
            } else a[g] = s.T().internalBinaryRead(e, e.uint32(), n, a[g]);
            break;
          case "map":
            let [B, D] = this.mapEntry(s, e, n);
            a[g][B] = D;
            break;
        }
      }
    }
    mapEntry(e, t, n) {
      let i = t.uint32(),
        r = t.pos + i,
        c,
        o;
      for (; t.pos < r; ) {
        let [s, a] = t.tag();
        switch (s) {
          case 1:
            e.K == p.BOOL
              ? (c = t.bool().toString())
              : (c = this.scalar(t, e.K, E.STRING));
            break;
          case 2:
            switch (e.V.kind) {
              case "scalar":
                o = this.scalar(t, e.V.T, e.V.L);
                break;
              case "enum":
                o = t.int32();
                break;
              case "message":
                o = e.V.T().internalBinaryRead(t, t.uint32(), n);
                break;
            }
            break;
          default:
            throw new Error(
              `Unknown field ${s} (wire type ${a}) in map entry for ${this.info.typeName}#${e.name}`,
            );
        }
      }
      if (c === void 0) {
        let s = fe(e.K);
        c = e.K == p.BOOL ? s.toString() : s;
      }
      if (o === void 0)
        switch (e.V.kind) {
          case "scalar":
            o = fe(e.V.T, e.V.L);
            break;
          case "enum":
            o = 0;
            break;
          case "message":
            o = e.V.T().create();
            break;
        }
      return [c, o];
    }
    scalar(e, t, n) {
      switch (t) {
        case p.INT32:
          return e.int32();
        case p.STRING:
          return e.string();
        case p.BOOL:
          return e.bool();
        case p.DOUBLE:
          return e.double();
        case p.FLOAT:
          return e.float();
        case p.INT64:
          return F(e.int64(), n);
        case p.UINT64:
          return F(e.uint64(), n);
        case p.FIXED64:
          return F(e.fixed64(), n);
        case p.FIXED32:
          return e.fixed32();
        case p.BYTES:
          return e.bytes();
        case p.UINT32:
          return e.uint32();
        case p.SFIXED32:
          return e.sfixed32();
        case p.SFIXED64:
          return F(e.sfixed64(), n);
        case p.SINT32:
          return e.sint32();
        case p.SINT64:
          return F(e.sint64(), n);
      }
    }
  };
  var Ee = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      if (!this.fields) {
        let e = this.info.fields ? this.info.fields.concat() : [];
        this.fields = e.sort((t, n) => t.no - n.no);
      }
    }
    write(e, t, n) {
      this.prepare();
      for (let r of this.fields) {
        let c,
          o,
          s = r.repeat,
          a = r.localName;
        if (r.oneof) {
          let d = e[r.oneof];
          if (d.oneofKind !== a) continue;
          (c = d[a]), (o = !0);
        } else (c = e[a]), (o = !1);
        switch (r.kind) {
          case "scalar":
          case "enum":
            let d = r.kind == "enum" ? p.INT32 : r.T;
            if (s)
              if ((R(Array.isArray(c)), s == ue.PACKED))
                this.packed(t, d, r.no, c);
              else for (let g of c) this.scalar(t, d, r.no, g, !0);
            else
              c === void 0 ? R(r.opt) : this.scalar(t, d, r.no, c, o || r.opt);
            break;
          case "message":
            if (s) {
              R(Array.isArray(c));
              for (let g of c) this.message(t, n, r.T(), r.no, g);
            } else this.message(t, n, r.T(), r.no, c);
            break;
          case "map":
            R(typeof c == "object" && c !== null);
            for (let [g, b] of Object.entries(c)) this.mapEntry(t, n, r, g, b);
            break;
        }
      }
      let i = n.writeUnknownFields;
      i !== !1 && (i === !0 ? f.onWrite : i)(this.info.typeName, e, t);
    }
    mapEntry(e, t, n, i, r) {
      e.tag(n.no, u.LengthDelimited), e.fork();
      let c = i;
      switch (n.K) {
        case p.INT32:
        case p.FIXED32:
        case p.UINT32:
        case p.SFIXED32:
        case p.SINT32:
          c = Number.parseInt(i);
          break;
        case p.BOOL:
          R(i == "true" || i == "false"), (c = i == "true");
          break;
      }
      switch ((this.scalar(e, n.K, 1, c, !0), n.V.kind)) {
        case "scalar":
          this.scalar(e, n.V.T, 2, r, !0);
          break;
        case "enum":
          this.scalar(e, p.INT32, 2, r, !0);
          break;
        case "message":
          this.message(e, t, n.V.T(), 2, r);
          break;
      }
      e.join();
    }
    message(e, t, n, i, r) {
      r !== void 0 &&
        (n.internalBinaryWrite(r, e.tag(i, u.LengthDelimited).fork(), t),
        e.join());
    }
    scalar(e, t, n, i, r) {
      let [c, o, s] = this.scalarInfo(t, i);
      (!s || r) && (e.tag(n, c), e[o](i));
    }
    packed(e, t, n, i) {
      if (!i.length) return;
      R(t !== p.BYTES && t !== p.STRING), e.tag(n, u.LengthDelimited), e.fork();
      let [, r] = this.scalarInfo(t);
      for (let c = 0; c < i.length; c++) e[r](i[c]);
      e.join();
    }
    scalarInfo(e, t) {
      let n = u.Varint,
        i,
        r = t === void 0,
        c = t === 0;
      switch (e) {
        case p.INT32:
          i = "int32";
          break;
        case p.STRING:
          (c = r || !t.length), (n = u.LengthDelimited), (i = "string");
          break;
        case p.BOOL:
          (c = t === !1), (i = "bool");
          break;
        case p.UINT32:
          i = "uint32";
          break;
        case p.DOUBLE:
          (n = u.Bit64), (i = "double");
          break;
        case p.FLOAT:
          (n = u.Bit32), (i = "float");
          break;
        case p.INT64:
          (c = r || T.from(t).isZero()), (i = "int64");
          break;
        case p.UINT64:
          (c = r || P.from(t).isZero()), (i = "uint64");
          break;
        case p.FIXED64:
          (c = r || P.from(t).isZero()), (n = u.Bit64), (i = "fixed64");
          break;
        case p.BYTES:
          (c = r || !t.byteLength), (n = u.LengthDelimited), (i = "bytes");
          break;
        case p.FIXED32:
          (n = u.Bit32), (i = "fixed32");
          break;
        case p.SFIXED32:
          (n = u.Bit32), (i = "sfixed32");
          break;
        case p.SFIXED64:
          (c = r || T.from(t).isZero()), (n = u.Bit64), (i = "sfixed64");
          break;
        case p.SINT32:
          i = "sint32";
          break;
        case p.SINT64:
          (c = r || T.from(t).isZero()), (i = "sint64");
          break;
      }
      return [n, i, r || c];
    }
  };
  function Lr(l) {
    let e = l.messagePrototype
      ? Object.create(l.messagePrototype)
      : Object.defineProperty({}, Se, { value: l });
    for (let t of l.fields) {
      let n = t.localName;
      if (!t.opt)
        if (t.oneof) e[t.oneof] = { oneofKind: void 0 };
        else if (t.repeat) e[n] = [];
        else
          switch (t.kind) {
            case "scalar":
              e[n] = fe(t.T, t.L);
              break;
            case "enum":
              e[n] = 0;
              break;
            case "map":
              e[n] = {};
              break;
          }
    }
    return e;
  }
  function y(l, e, t) {
    let n,
      i = t,
      r;
    for (let c of l.fields) {
      let o = c.localName;
      if (c.oneof) {
        let s = i[c.oneof];
        if (s?.oneofKind == null) continue;
        if (
          ((n = s[o]), (r = e[c.oneof]), (r.oneofKind = s.oneofKind), n == null)
        ) {
          delete r[o];
          continue;
        }
      } else if (((n = i[o]), (r = e), n == null)) continue;
      switch ((c.repeat && (r[o].length = n.length), c.kind)) {
        case "scalar":
        case "enum":
          if (c.repeat) for (let a = 0; a < n.length; a++) r[o][a] = n[a];
          else r[o] = n;
          break;
        case "message":
          let s = c.T();
          if (c.repeat)
            for (let a = 0; a < n.length; a++) r[o][a] = s.create(n[a]);
          else r[o] === void 0 ? (r[o] = s.create(n)) : s.mergePartial(r[o], n);
          break;
        case "map":
          switch (c.V.kind) {
            case "scalar":
            case "enum":
              Object.assign(r[o], n);
              break;
            case "message":
              let a = c.V.T();
              for (let d of Object.keys(n)) r[o][d] = a.create(n[d]);
              break;
          }
          break;
      }
    }
  }
  function $r(l, e, t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    for (let n of l.fields) {
      let i = n.localName,
        r = n.oneof ? e[n.oneof][i] : e[i],
        c = n.oneof ? t[n.oneof][i] : t[i];
      switch (n.kind) {
        case "enum":
        case "scalar":
          let o = n.kind == "enum" ? p.INT32 : n.T;
          if (!(n.repeat ? Fr(o, r, c) : Mr(o, r, c))) return !1;
          break;
        case "map":
          if (
            !(n.V.kind == "message"
              ? Dr(n.V.T(), Le(r), Le(c))
              : Fr(n.V.kind == "enum" ? p.INT32 : n.V.T, Le(r), Le(c)))
          )
            return !1;
          break;
        case "message":
          let s = n.T();
          if (!(n.repeat ? Dr(s, r, c) : s.equals(r, c))) return !1;
          break;
      }
    }
    return !0;
  }
  var Le = Object.values;
  function Mr(l, e, t) {
    if (e === t) return !0;
    if (l !== p.BYTES) return !1;
    let n = e,
      i = t;
    if (n.length !== i.length) return !1;
    for (let r = 0; r < n.length; r++) if (n[r] != i[r]) return !1;
    return !0;
  }
  function Fr(l, e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!Mr(l, e[n], t[n])) return !1;
    return !0;
  }
  function Dr(l, e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!l.equals(e[n], t[n])) return !1;
    return !0;
  }
  var ti = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})),
    h = class {
      constructor(e, t, n) {
        (this.defaultCheckDepth = 16),
          (this.typeName = e),
          (this.fields = t.map(Cr)),
          (this.options = n ?? {}),
          (this.messagePrototype = Object.create(
            null,
            Object.assign(Object.assign({}, ti), { [Se]: { value: this } }),
          )),
          (this.refTypeCheck = new Pe(this)),
          (this.refJsonReader = new Oe(this)),
          (this.refJsonWriter = new Ue(this)),
          (this.refBinReader = new Ce(this)),
          (this.refBinWriter = new Ee(this));
      }
      create(e) {
        let t = Lr(this);
        return e !== void 0 && y(this, t, e), t;
      }
      clone(e) {
        let t = this.create();
        return y(this, t, e), t;
      }
      equals(e, t) {
        return $r(this, e, t);
      }
      is(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !1);
      }
      isAssignable(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !0);
      }
      mergePartial(e, t) {
        y(this, e, t);
      }
      fromBinary(e, t) {
        let n = Nr(t);
        return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n);
      }
      fromJson(e, t) {
        return this.internalJsonRead(e, Or(t));
      }
      fromJsonString(e, t) {
        let n = JSON.parse(e);
        return this.fromJson(n, t);
      }
      toJson(e, t) {
        return this.internalJsonWrite(e, Ur(t));
      }
      toJsonString(e, t) {
        var n;
        let i = this.toJson(e, t);
        return JSON.stringify(
          i,
          null,
          (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0,
        );
      }
      toBinary(e, t) {
        let n = xr(t);
        return this.internalBinaryWrite(e, n.writerFactory(), n).finish();
      }
      internalJsonRead(e, t, n) {
        if (e !== null && typeof e == "object" && !Array.isArray(e)) {
          let i = n ?? this.create();
          return this.refJsonReader.read(e, i, t), i;
        }
        throw new Error(
          `Unable to parse message ${this.typeName} from JSON ${Re(e)}.`,
        );
      }
      internalJsonWrite(e, t) {
        return this.refJsonWriter.write(e, t);
      }
      internalBinaryWrite(e, t, n) {
        return this.refBinWriter.write(e, t, n), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create();
        return this.refBinReader.read(e, r, n, t), r;
      }
    };
  var Ye = class extends h {
      constructor() {
        super("youtube.component.Label", [
          { no: 1, name: "runs", kind: "message", repeat: 1, T: () => q },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.runs = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.runs.push(q.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.runs.length; r++)
          q.internalBinaryWrite(
            e.runs[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    W = new Ye(),
    qe = class extends h {
      constructor() {
        super("youtube.component.Run", [
          { no: 1, name: "text", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.text = ""), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.text = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.text !== "" && t.tag(1, u.LengthDelimited).string(e.text);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    q = new qe();
  var Qe = class extends h {
      constructor() {
        super("youtube.component.FrameworkUpdateTransport", [
          { no: 1, name: "entityBatchUpdate", kind: "message", T: () => Ze },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.entityBatchUpdate = Ze.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.entityBatchUpdate,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.entityBatchUpdate &&
          Ze.internalBinaryWrite(
            e.entityBatchUpdate,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    J = new Qe(),
    et = class extends h {
      constructor() {
        super("youtube.component.EntityBatchUpdate", [
          { no: 1, name: "mutations", kind: "message", repeat: 1, T: () => ze },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.mutations = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.mutations.push(ze.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.mutations.length; r++)
          ze.internalBinaryWrite(
            e.mutations[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ze = new et(),
    tt = class extends h {
      constructor() {
        super("youtube.component.Mutation", [
          { no: 1, name: "entityKey", kind: "scalar", T: 9 },
          { no: 2, name: "type", kind: "scalar", T: 5 },
          { no: 3, name: "payload", kind: "message", T: () => He },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.entityKey = ""), (t.type = 0), e !== void 0 && y(this, t, e), t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.entityKey = e.string();
              break;
            case 2:
              r.type = e.int32();
              break;
            case 3:
              r.payload = He.internalBinaryRead(e, e.uint32(), n, r.payload);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.entityKey !== "" && t.tag(1, u.LengthDelimited).string(e.entityKey),
          e.type !== 0 && t.tag(2, u.Varint).int32(e.type),
          e.payload &&
            He.internalBinaryWrite(
              e.payload,
              t.tag(3, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ze = new tt(),
    nt = class extends h {
      constructor() {
        super("youtube.component.Payload", []);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        return i ?? this.create();
      }
      internalBinaryWrite(e, t, n) {
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    He = new nt(),
    rt = class extends h {
      constructor() {
        super("youtube.component.Entity", [
          { no: 2, name: "name", kind: "scalar", T: 9 },
          { no: 4, name: "targetNo", kind: "scalar", T: 5 },
          { no: 5, name: "type", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.name = ""),
          (t.targetNo = 0),
          (t.type = 0),
          e !== void 0 && y(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 2:
              r.name = e.string();
              break;
            case 4:
              r.targetNo = e.int32();
              break;
            case 5:
              r.type = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.name !== "" && t.tag(2, u.LengthDelimited).string(e.name),
          e.targetNo !== 0 && t.tag(4, u.Varint).int32(e.targetNo),
          e.type !== 0 && t.tag(5, u.Varint).int32(e.type);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    fo = new rt();
  var ot = class extends h {
      constructor() {
        super("youtube.component.ResponseContext", [
          {
            no: 6,
            name: "serviceTrackingParams",
            kind: "message",
            repeat: 1,
            T: () => it,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.serviceTrackingParams = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 6:
              r.serviceTrackingParams.push(
                it.internalBinaryRead(e, e.uint32(), n),
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.serviceTrackingParams.length; r++)
          it.internalBinaryWrite(
            e.serviceTrackingParams[r],
            t.tag(6, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Fe = new ot(),
    st = class extends h {
      constructor() {
        super("youtube.component.ServiceTrackingParam", [
          { no: 1, name: "service", kind: "scalar", T: 5 },
          { no: 2, name: "params", kind: "message", repeat: 1, T: () => at },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.service = 0), (t.params = []), e !== void 0 && y(this, t, e), t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.service = e.int32();
              break;
            case 2:
              r.params.push(at.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.service !== 0 && t.tag(1, u.Varint).int32(e.service);
        for (let r = 0; r < e.params.length; r++)
          at.internalBinaryWrite(
            e.params[r],
            t.tag(2, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    it = new st(),
    lt = class extends h {
      constructor() {
        super("youtube.component.Param", [
          { no: 1, name: "key", kind: "scalar", T: 9 },
          { no: 2, name: "value", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.key = ""), (t.value = ""), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.key = e.string();
              break;
            case 2:
              r.value = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.key !== "" && t.tag(1, u.LengthDelimited).string(e.key),
          e.value !== "" && t.tag(2, u.LengthDelimited).string(e.value);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    at = new lt();
  var Nt = class extends h {
      constructor() {
        super("youtube.response.browse.Browse", [
          { no: 1, name: "responseContext", kind: "message", T: () => Fe },
          { no: 9, name: "content", kind: "message", T: () => C },
          {
            no: 10,
            name: "onResponseReceivedAction",
            kind: "message",
            T: () => C,
          },
          {
            no: 777,
            name: "frameworkUpdateTransport",
            kind: "message",
            T: () => J,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.responseContext = Fe.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.responseContext,
              );
              break;
            case 9:
              r.content = C.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            case 10:
              r.onResponseReceivedAction = C.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.onResponseReceivedAction,
              );
              break;
            case 777:
              r.frameworkUpdateTransport = J.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.frameworkUpdateTransport,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.responseContext &&
          Fe.internalBinaryWrite(
            e.responseContext,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.content &&
            C.internalBinaryWrite(
              e.content,
              t.tag(9, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.onResponseReceivedAction &&
            C.internalBinaryWrite(
              e.onResponseReceivedAction,
              t.tag(10, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.frameworkUpdateTransport &&
            J.internalBinaryWrite(
              e.frameworkUpdateTransport,
              t.tag(777, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    jr = new Nt(),
    Wt = class extends h {
      constructor() {
        super("youtube.response.browse.Content", [
          {
            no: 58173949,
            name: "singleColumnResultsRenderer",
            kind: "message",
            T: () => ct,
          },
          {
            no: 153515154,
            name: "elementRenderer",
            kind: "message",
            T: () => ee,
          },
          {
            no: 49399797,
            name: "sectionListRenderer",
            kind: "message",
            T: () => Z,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 58173949:
              r.singleColumnResultsRenderer = ct.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.singleColumnResultsRenderer,
              );
              break;
            case 153515154:
              r.elementRenderer = ee.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.elementRenderer,
              );
              break;
            case 49399797:
              r.sectionListRenderer = Z.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.sectionListRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.singleColumnResultsRenderer &&
          ct
            .internalBinaryWrite(
              e.singleColumnResultsRenderer,
              t.tag(58173949, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.elementRenderer &&
            ee
              .internalBinaryWrite(
                e.elementRenderer,
                t.tag(153515154, u.LengthDelimited).fork(),
                n,
              )
              .join(),
          e.sectionListRenderer &&
            Z.internalBinaryWrite(
              e.sectionListRenderer,
              t.tag(49399797, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    C = new Wt(),
    xt = class extends h {
      constructor() {
        super("youtube.response.browse.SingleColumnResultsRenderer", [
          { no: 1, name: "tabs", kind: "message", repeat: 1, T: () => dt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.tabs = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.tabs.push(dt.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.tabs.length; r++)
          dt.internalBinaryWrite(
            e.tabs[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ct = new xt(),
    St = class extends h {
      constructor() {
        super("youtube.response.browse.BrowseTabSupportedRenderer", [
          { no: 58174010, name: "tabRenderer", kind: "message", T: () => ut },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 58174010:
              r.tabRenderer = ut.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.tabRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.tabRenderer &&
          ut
            .internalBinaryWrite(
              e.tabRenderer,
              t.tag(58174010, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    dt = new St(),
    Pt = class extends h {
      constructor() {
        super("youtube.response.browse.TabRenderer", [
          { no: 4, name: "content", kind: "message", T: () => C },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 4:
              r.content = C.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.content &&
          C.internalBinaryWrite(
            e.content,
            t.tag(4, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ut = new Pt(),
    Ot = class extends h {
      constructor() {
        super("youtube.response.browse.SectionListRenderer", [
          {
            no: 1,
            name: "sectionListSupportedRenderers",
            kind: "message",
            repeat: 1,
            T: () => ft,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.sectionListSupportedRenderers = []),
          e !== void 0 && y(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.sectionListSupportedRenderers.push(
                ft.internalBinaryRead(e, e.uint32(), n),
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.sectionListSupportedRenderers.length; r++)
          ft.internalBinaryWrite(
            e.sectionListSupportedRenderers[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Z = new Ot(),
    Ut = class extends h {
      constructor() {
        super("youtube.response.browse.SectionListSupportedRenderer", [
          {
            no: 50195462,
            name: "itemSectionRenderer",
            kind: "message",
            T: () => z,
          },
          { no: 51845067, name: "shelfRenderer", kind: "message", T: () => wt },
          {
            no: 221496734,
            name: "musicDescriptionShelfRenderer",
            kind: "message",
            T: () => It,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 50195462:
              r.itemSectionRenderer = z.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.itemSectionRenderer,
              );
              break;
            case 51845067:
              r.shelfRenderer = wt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.shelfRenderer,
              );
              break;
            case 221496734:
              r.musicDescriptionShelfRenderer = It.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.musicDescriptionShelfRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.itemSectionRenderer &&
          z
            .internalBinaryWrite(
              e.itemSectionRenderer,
              t.tag(50195462, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.shelfRenderer &&
            wt
              .internalBinaryWrite(
                e.shelfRenderer,
                t.tag(51845067, u.LengthDelimited).fork(),
                n,
              )
              .join(),
          e.musicDescriptionShelfRenderer &&
            It.internalBinaryWrite(
              e.musicDescriptionShelfRenderer,
              t.tag(221496734, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ft = new Ut(),
    Ct = class extends h {
      constructor() {
        super("youtube.response.browse.ItemSectionRenderer", [
          {
            no: 1,
            name: "richItemContent",
            kind: "message",
            repeat: 1,
            T: () => Q,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.richItemContent = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.richItemContent.push(Q.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.richItemContent.length; r++)
          Q.internalBinaryWrite(
            e.richItemContent[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    z = new Ct(),
    Et = class extends h {
      constructor() {
        super("youtube.response.browse.RichItemContent", [
          {
            no: 153515154,
            name: "videoWithContextRenderer",
            kind: "message",
            T: () => ee,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 153515154:
              r.videoWithContextRenderer = ee.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoWithContextRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoWithContextRenderer &&
          ee
            .internalBinaryWrite(
              e.videoWithContextRenderer,
              t.tag(153515154, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Q = new Et(),
    Lt = class extends h {
      constructor() {
        super("youtube.response.browse.ElementRenderer", [
          {
            no: 172660663,
            name: "videoRendererContent",
            kind: "message",
            T: () => pt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 172660663:
              r.videoRendererContent = pt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoRendererContent,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoRendererContent &&
          pt
            .internalBinaryWrite(
              e.videoRendererContent,
              t.tag(172660663, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ee = new Lt(),
    Ft = class extends h {
      constructor() {
        super("youtube.response.browse.VideoRendererContent", [
          { no: 1, name: "videoInfo", kind: "message", T: () => yt },
          { no: 2, name: "renderInfo", kind: "message", T: () => kt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.videoInfo = yt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoInfo,
              );
              break;
            case 2:
              r.renderInfo = kt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.renderInfo,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoInfo &&
          yt
            .internalBinaryWrite(
              e.videoInfo,
              t.tag(1, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.renderInfo &&
            kt
              .internalBinaryWrite(
                e.renderInfo,
                t.tag(2, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    pt = new Ft(),
    Dt = class extends h {
      constructor() {
        super("youtube.response.browse.VideoInfo", [
          { no: 168777401, name: "videoContext", kind: "message", T: () => ht },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 168777401:
              r.videoContext = ht.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoContext,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoContext &&
          ht
            .internalBinaryWrite(
              e.videoContext,
              t.tag(168777401, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    yt = new Dt(),
    $t = class extends h {
      constructor() {
        super("youtube.response.browse.VideoContext", [
          { no: 5, name: "videoContent", kind: "message", T: () => mt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 5:
              r.videoContent = mt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoContent,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoContent &&
          mt
            .internalBinaryWrite(
              e.videoContent,
              t.tag(5, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ht = new $t(),
    Mt = class extends h {
      constructor() {
        super("youtube.response.browse.VideoContent", [
          {
            no: 465160965,
            name: "timedLyricsRender",
            kind: "message",
            T: () => gt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 465160965:
              r.timedLyricsRender = gt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.timedLyricsRender,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.timedLyricsRender &&
          gt
            .internalBinaryWrite(
              e.timedLyricsRender,
              t.tag(465160965, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    mt = new Mt(),
    jt = class extends h {
      constructor() {
        super("youtube.response.browse.TimedLyricsRender", [
          { no: 4, name: "timedLyricsContent", kind: "message", T: () => bt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 4:
              r.timedLyricsContent = bt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.timedLyricsContent,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.timedLyricsContent &&
          bt
            .internalBinaryWrite(
              e.timedLyricsContent,
              t.tag(4, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    gt = new jt(),
    At = class extends h {
      constructor() {
        super("youtube.response.browse.TimedLyricsContent", [
          { no: 1, name: "runs", kind: "message", repeat: 1, T: () => q },
          { no: 2, name: "footerLabel", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.runs = []), (t.footerLabel = ""), e !== void 0 && y(this, t, e), t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.runs.push(q.internalBinaryRead(e, e.uint32(), n));
              break;
            case 2:
              r.footerLabel = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.runs.length; r++)
          q.internalBinaryWrite(
            e.runs[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        e.footerLabel !== "" &&
          t.tag(2, u.LengthDelimited).string(e.footerLabel);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    bt = new At(),
    Vt = class extends h {
      constructor() {
        super("youtube.response.browse.RenderInfo", [
          { no: 183314536, name: "layoutRender", kind: "message", T: () => Rt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 183314536:
              r.layoutRender = Rt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.layoutRender,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.layoutRender &&
          Rt.internalBinaryWrite(
            e.layoutRender,
            t.tag(183314536, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    kt = new Vt(),
    vt = class extends h {
      constructor() {
        super("youtube.response.browse.LayoutRender", [
          { no: 1, name: "eml", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.eml = ""), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.eml = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.eml !== "" && t.tag(1, u.LengthDelimited).string(e.eml);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Rt = new vt(),
    Gt = class extends h {
      constructor() {
        super("youtube.response.browse.ShelfRenderer", [
          { no: 5, name: "richSectionContent", kind: "message", T: () => Bt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 5:
              r.richSectionContent = Bt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.richSectionContent,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.richSectionContent &&
          Bt.internalBinaryWrite(
            e.richSectionContent,
            t.tag(5, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    wt = new Gt(),
    Kt = class extends h {
      constructor() {
        super("youtube.response.browse.RichSectionContent", [
          {
            no: 51431404,
            name: "reelShelfRenderer",
            kind: "message",
            T: () => Tt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 51431404:
              r.reelShelfRenderer = Tt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.reelShelfRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.reelShelfRenderer &&
          Tt.internalBinaryWrite(
            e.reelShelfRenderer,
            t.tag(51431404, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Bt = new Kt(),
    Jt = class extends h {
      constructor() {
        super("youtube.response.browse.ReelShelfRenderer", [
          {
            no: 1,
            name: "richItemContent",
            kind: "message",
            repeat: 1,
            T: () => Q,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.richItemContent = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.richItemContent.push(Q.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.richItemContent.length; r++)
          Q.internalBinaryWrite(
            e.richItemContent[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Tt = new Jt(),
    _t = class extends h {
      constructor() {
        super("youtube.response.browse.MusicDescriptionShelfRenderer", [
          { no: 3, name: "description", kind: "message", T: () => W },
          { no: 10, name: "footer", kind: "message", T: () => W },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 3:
              r.description = W.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.description,
              );
              break;
            case 10:
              r.footer = W.internalBinaryRead(e, e.uint32(), n, r.footer);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.description &&
          W.internalBinaryWrite(
            e.description,
            t.tag(3, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.footer &&
            W.internalBinaryWrite(
              e.footer,
              t.tag(10, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    It = new _t();
  var qt = class extends h {
      constructor() {
        super("youtube.response.next.Next", [
          { no: 7, name: "content", kind: "message", T: () => Xt },
          {
            no: 8,
            name: "onResponseReceivedAction",
            kind: "message",
            T: () => C,
          },
          {
            no: 777,
            name: "frameworkUpdateTransport",
            kind: "message",
            T: () => J,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 7:
              r.content = Xt.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            case 8:
              r.onResponseReceivedAction = C.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.onResponseReceivedAction,
              );
              break;
            case 777:
              r.frameworkUpdateTransport = J.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.frameworkUpdateTransport,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.content &&
          Xt.internalBinaryWrite(
            e.content,
            t.tag(7, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.onResponseReceivedAction &&
            C.internalBinaryWrite(
              e.onResponseReceivedAction,
              t.tag(8, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.frameworkUpdateTransport &&
            J.internalBinaryWrite(
              e.frameworkUpdateTransport,
              t.tag(777, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    te = new qt(),
    Zt = class extends h {
      constructor() {
        super("youtube.response.next.Content", [
          { no: 51779735, name: "nextResult", kind: "message", T: () => Yt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 51779735:
              r.nextResult = Yt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.nextResult,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.nextResult &&
          Yt.internalBinaryWrite(
            e.nextResult,
            t.tag(51779735, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Xt = new Zt(),
    zt = class extends h {
      constructor() {
        super("youtube.response.next.NextResult", [
          { no: 1, name: "content", kind: "message", T: () => C },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.content = C.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.content &&
          C.internalBinaryWrite(
            e.content,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Yt = new zt();
  var Qt = class extends h {
      constructor() {
        super("youtube.response.search.Search", [
          { no: 4, name: "content", kind: "message", T: () => C },
          {
            no: 7,
            name: "onResponseReceivedCommand",
            kind: "message",
            T: () => Ht,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 4:
              r.content = C.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            case 7:
              r.onResponseReceivedCommand = Ht.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.onResponseReceivedCommand,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.content &&
          C.internalBinaryWrite(
            e.content,
            t.tag(4, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.onResponseReceivedCommand &&
            Ht.internalBinaryWrite(
              e.onResponseReceivedCommand,
              t.tag(7, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ar = new Qt(),
    en = class extends h {
      constructor() {
        super("youtube.response.search.OnResponseReceivedCommand", [
          {
            no: 50195462,
            name: "itemSectionRenderer",
            kind: "message",
            T: () => z,
          },
          {
            no: 49399797,
            name: "appendContinuationItemsAction",
            kind: "message",
            T: () => Z,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 50195462:
              r.itemSectionRenderer = z.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.itemSectionRenderer,
              );
              break;
            case 49399797:
              r.appendContinuationItemsAction = Z.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.appendContinuationItemsAction,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.itemSectionRenderer &&
          z
            .internalBinaryWrite(
              e.itemSectionRenderer,
              t.tag(50195462, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.appendContinuationItemsAction &&
            Z.internalBinaryWrite(
              e.appendContinuationItemsAction,
              t.tag(49399797, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ht = new en();
  var sn = class extends h {
      constructor() {
        super("youtube.response.shorts.Shorts", [
          { no: 2, name: "entries", kind: "message", repeat: 1, T: () => tn },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.entries = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 2:
              r.entries.push(tn.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.entries.length; r++)
          tn.internalBinaryWrite(
            e.entries[r],
            t.tag(2, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Vr = new sn(),
    ln = class extends h {
      constructor() {
        super("youtube.response.shorts.Entry", [
          { no: 1, name: "command", kind: "message", T: () => nn },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.command = nn.internalBinaryRead(e, e.uint32(), n, r.command);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.command &&
          nn
            .internalBinaryWrite(
              e.command,
              t.tag(1, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    tn = new ln(),
    cn = class extends h {
      constructor() {
        super("youtube.response.shorts.Command", [
          {
            no: 139608561,
            name: "reelWatchEndpoint",
            kind: "message",
            T: () => rn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 139608561:
              r.reelWatchEndpoint = rn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.reelWatchEndpoint,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.reelWatchEndpoint &&
          rn
            .internalBinaryWrite(
              e.reelWatchEndpoint,
              t.tag(139608561, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    nn = new cn(),
    dn = class extends h {
      constructor() {
        super("youtube.response.shorts.ReelWatchEndpoint", [
          { no: 8, name: "overlay", kind: "message", T: () => an },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 8:
              r.overlay = an.internalBinaryRead(e, e.uint32(), n, r.overlay);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.overlay &&
          an
            .internalBinaryWrite(
              e.overlay,
              t.tag(8, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    rn = new dn(),
    un = class extends h {
      constructor() {
        super("youtube.response.shorts.Overlay", [
          {
            no: 139970731,
            name: "reelPlayerOverlayRenderer",
            kind: "message",
            T: () => on,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 139970731:
              r.reelPlayerOverlayRenderer = on.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.reelPlayerOverlayRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.reelPlayerOverlayRenderer &&
          on
            .internalBinaryWrite(
              e.reelPlayerOverlayRenderer,
              t.tag(139970731, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    an = new un(),
    fn = class extends h {
      constructor() {
        super("youtube.response.shorts.ReelPlayerOverlayRenderer", [
          { no: 12, name: "style", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.style = 0), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 12:
              r.style = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.style !== 0 && t.tag(12, u.Varint).int32(e.style);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    on = new fn();
  var hn = class extends h {
      constructor() {
        super("youtube.response.browse.Guide", [
          { no: 4, name: "items4", kind: "message", repeat: 1, T: () => ne },
          { no: 6, name: "items6", kind: "message", repeat: 1, T: () => ne },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.items4 = []), (t.items6 = []), e !== void 0 && y(this, t, e), t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 4:
              r.items4.push(ne.internalBinaryRead(e, e.uint32(), n));
              break;
            case 6:
              r.items6.push(ne.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.items4.length; r++)
          ne.internalBinaryWrite(
            e.items4[r],
            t.tag(4, u.LengthDelimited).fork(),
            n,
          ).join();
        for (let r = 0; r < e.items6.length; r++)
          ne.internalBinaryWrite(
            e.items6[r],
            t.tag(6, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    vr = new hn(),
    mn = class extends h {
      constructor() {
        super("youtube.response.browse.Item", [
          {
            no: 117866661,
            name: "guideSectionRenderer",
            kind: "message",
            T: () => pn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 117866661:
              r.guideSectionRenderer = pn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.guideSectionRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.guideSectionRenderer &&
          pn
            .internalBinaryWrite(
              e.guideSectionRenderer,
              t.tag(117866661, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ne = new mn(),
    gn = class extends h {
      constructor() {
        super("youtube.response.browse.GuideSectionRenderer", [
          {
            no: 1,
            name: "rendererItems",
            kind: "message",
            repeat: 1,
            T: () => yn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.rendererItems = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.rendererItems.push(yn.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.rendererItems.length; r++)
          yn.internalBinaryWrite(
            e.rendererItems[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    pn = new gn(),
    bn = class extends h {
      constructor() {
        super("youtube.response.browse.RendererItem", [
          { no: 318370163, name: "iconRender", kind: "message", T: () => re },
          { no: 117501096, name: "labelRender", kind: "message", T: () => re },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 318370163:
              r.iconRender = re.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.iconRender,
              );
              break;
            case 117501096:
              r.labelRender = re.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.labelRender,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.iconRender &&
          re
            .internalBinaryWrite(
              e.iconRender,
              t.tag(318370163, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.labelRender &&
            re
              .internalBinaryWrite(
                e.labelRender,
                t.tag(117501096, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    yn = new bn(),
    kn = class extends h {
      constructor() {
        super("youtube.response.browse.guideEntryRenderer", [
          { no: 1, name: "browseId", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.browseId = ""), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.browseId = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.browseId !== "" && t.tag(1, u.LengthDelimited).string(e.browseId);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    re = new kn();
  var Cn = class extends h {
      constructor() {
        super("youtube.response.player.Player", [
          {
            no: 7,
            name: "adPlacements",
            kind: "message",
            repeat: 1,
            T: () => Rn,
          },
          { no: 2, name: "playabilityStatus", kind: "message", T: () => Bn },
          { no: 9, name: "playbackTracking", kind: "message", T: () => Wn },
          { no: 10, name: "captions", kind: "message", T: () => xn },
          { no: 68, name: "adSlots", kind: "message", repeat: 1, T: () => On },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.adPlacements = []),
          (t.adSlots = []),
          e !== void 0 && y(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 7:
              r.adPlacements.push(Rn.internalBinaryRead(e, e.uint32(), n));
              break;
            case 2:
              r.playabilityStatus = Bn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.playabilityStatus,
              );
              break;
            case 9:
              r.playbackTracking = Wn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.playbackTracking,
              );
              break;
            case 10:
              r.captions = xn.internalBinaryRead(e, e.uint32(), n, r.captions);
              break;
            case 68:
              r.adSlots.push(On.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.adPlacements.length; r++)
          Rn.internalBinaryWrite(
            e.adPlacements[r],
            t.tag(7, u.LengthDelimited).fork(),
            n,
          ).join();
        e.playabilityStatus &&
          Bn.internalBinaryWrite(
            e.playabilityStatus,
            t.tag(2, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.playbackTracking &&
            Wn.internalBinaryWrite(
              e.playbackTracking,
              t.tag(9, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.captions &&
            xn
              .internalBinaryWrite(
                e.captions,
                t.tag(10, u.LengthDelimited).fork(),
                n,
              )
              .join();
        for (let r = 0; r < e.adSlots.length; r++)
          On.internalBinaryWrite(
            e.adSlots[r],
            t.tag(68, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ie = new Cn(),
    En = class extends h {
      constructor() {
        super("youtube.response.player.AdPlacement", [
          {
            no: 84813246,
            name: "adPlacementRenderer",
            kind: "message",
            T: () => wn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 84813246:
              r.adPlacementRenderer = wn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.adPlacementRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.adPlacementRenderer &&
          wn
            .internalBinaryWrite(
              e.adPlacementRenderer,
              t.tag(84813246, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Rn = new En(),
    Ln = class extends h {
      constructor() {
        super("youtube.response.player.AdPlacementRenderer", [
          { no: 4, name: "params", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.params = ""), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 4:
              r.params = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.params !== "" && t.tag(4, u.LengthDelimited).string(e.params);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    wn = new Ln(),
    Fn = class extends h {
      constructor() {
        super("youtube.response.player.PlayabilityStatus", [
          { no: 21, name: "miniPlayer", kind: "message", T: () => Tn },
          { no: 11, name: "backgroundPlayer", kind: "message", T: () => pe },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 21:
              r.miniPlayer = Tn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.miniPlayer,
              );
              break;
            case 11:
              r.backgroundPlayer = pe.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.backgroundPlayer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.miniPlayer &&
          Tn.internalBinaryWrite(
            e.miniPlayer,
            t.tag(21, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.backgroundPlayer &&
            pe
              .internalBinaryWrite(
                e.backgroundPlayer,
                t.tag(11, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Bn = new Fn(),
    Dn = class extends h {
      constructor() {
        super("youtube.response.player.MiniPlayer", [
          {
            no: 151635310,
            name: "miniPlayerRender",
            kind: "message",
            T: () => In,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 151635310:
              r.miniPlayerRender = In.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.miniPlayerRender,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.miniPlayerRender &&
          In.internalBinaryWrite(
            e.miniPlayerRender,
            t.tag(151635310, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Tn = new Dn(),
    $n = class extends h {
      constructor() {
        super("youtube.response.player.BackgroundPlayer", [
          {
            no: 64657230,
            name: "backgroundPlayerRender",
            kind: "message",
            T: () => Nn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 64657230:
              r.backgroundPlayerRender = Nn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.backgroundPlayerRender,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.backgroundPlayerRender &&
          Nn.internalBinaryWrite(
            e.backgroundPlayerRender,
            t.tag(64657230, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    pe = new $n(),
    Mn = class extends h {
      constructor() {
        super("youtube.response.player.MiniPlayerRender", [
          { no: 1, name: "active", kind: "scalar", T: 8 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.active = !1), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.active = e.bool();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.active !== !1 && t.tag(1, u.Varint).bool(e.active);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    In = new Mn(),
    jn = class extends h {
      constructor() {
        super("youtube.response.player.BackgroundPlayerRender", [
          { no: 1, name: "active", kind: "scalar", T: 8 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.active = !1), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.active = e.bool();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.active !== !1 && t.tag(1, u.Varint).bool(e.active);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Nn = new jn(),
    An = class extends h {
      constructor() {
        super("youtube.response.player.PlaybackTracking", [
          { no: 1, name: "videostatsPlaybackUrl", kind: "message", T: () => O },
          {
            no: 2,
            name: "videostatsDelayplayUrl",
            kind: "message",
            T: () => O,
          },
          {
            no: 3,
            name: "videostatsWatchtimeUrl",
            kind: "message",
            T: () => O,
          },
          { no: 4, name: "ptrackingUrl", kind: "message", T: () => O },
          { no: 5, name: "qoeUrl", kind: "message", T: () => O },
          { no: 13, name: "atrUrl", kind: "message", T: () => O },
          { no: 15, name: "videostatsEngageUrl", kind: "message", T: () => O },
          {
            no: 18,
            name: "pageadViewthroughconversion",
            kind: "message",
            T: () => O,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.videostatsPlaybackUrl = O.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videostatsPlaybackUrl,
              );
              break;
            case 2:
              r.videostatsDelayplayUrl = O.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videostatsDelayplayUrl,
              );
              break;
            case 3:
              r.videostatsWatchtimeUrl = O.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videostatsWatchtimeUrl,
              );
              break;
            case 4:
              r.ptrackingUrl = O.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.ptrackingUrl,
              );
              break;
            case 5:
              r.qoeUrl = O.internalBinaryRead(e, e.uint32(), n, r.qoeUrl);
              break;
            case 13:
              r.atrUrl = O.internalBinaryRead(e, e.uint32(), n, r.atrUrl);
              break;
            case 15:
              r.videostatsEngageUrl = O.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videostatsEngageUrl,
              );
              break;
            case 18:
              r.pageadViewthroughconversion = O.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.pageadViewthroughconversion,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videostatsPlaybackUrl &&
          O.internalBinaryWrite(
            e.videostatsPlaybackUrl,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.videostatsDelayplayUrl &&
            O.internalBinaryWrite(
              e.videostatsDelayplayUrl,
              t.tag(2, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.videostatsWatchtimeUrl &&
            O.internalBinaryWrite(
              e.videostatsWatchtimeUrl,
              t.tag(3, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.ptrackingUrl &&
            O.internalBinaryWrite(
              e.ptrackingUrl,
              t.tag(4, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.qoeUrl &&
            O.internalBinaryWrite(
              e.qoeUrl,
              t.tag(5, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.atrUrl &&
            O.internalBinaryWrite(
              e.atrUrl,
              t.tag(13, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.videostatsEngageUrl &&
            O.internalBinaryWrite(
              e.videostatsEngageUrl,
              t.tag(15, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.pageadViewthroughconversion &&
            O.internalBinaryWrite(
              e.pageadViewthroughconversion,
              t.tag(18, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Wn = new An(),
    Vn = class extends h {
      constructor() {
        super("youtube.response.player.Tracking", [
          { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.baseUrl = ""), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.baseUrl = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.baseUrl !== "" && t.tag(1, u.LengthDelimited).string(e.baseUrl);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    O = new Vn(),
    vn = class extends h {
      constructor() {
        super("youtube.response.player.Captions", [
          {
            no: 51621377,
            name: "playerCaptionsTrackListRenderer",
            kind: "message",
            jsonName: "playerCaptionsTracklistRenderer",
            T: () => Sn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 51621377:
              r.playerCaptionsTrackListRenderer = Sn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.playerCaptionsTrackListRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.playerCaptionsTrackListRenderer &&
          Sn.internalBinaryWrite(
            e.playerCaptionsTrackListRenderer,
            t.tag(51621377, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    xn = new vn(),
    Gn = class extends h {
      constructor() {
        super("youtube.response.player.PlayerCaptionsTrackListRenderer", [
          {
            no: 1,
            name: "captionTracks",
            kind: "message",
            repeat: 1,
            T: () => ye,
          },
          {
            no: 2,
            name: "audioTracks",
            kind: "message",
            repeat: 1,
            T: () => Pn,
          },
          {
            no: 3,
            name: "translationLanguages",
            kind: "message",
            repeat: 1,
            T: () => he,
          },
          {
            no: 4,
            name: "defaultAudioTrackIndex",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
          {
            no: 6,
            name: "defaultCaptionTrackIndex",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.captionTracks = []),
          (t.audioTracks = []),
          (t.translationLanguages = []),
          e !== void 0 && y(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.captionTracks.push(ye.internalBinaryRead(e, e.uint32(), n));
              break;
            case 2:
              r.audioTracks.push(Pn.internalBinaryRead(e, e.uint32(), n));
              break;
            case 3:
              r.translationLanguages.push(
                he.internalBinaryRead(e, e.uint32(), n),
              );
              break;
            case 4:
              r.defaultAudioTrackIndex = e.int32();
              break;
            case 6:
              r.defaultCaptionTrackIndex = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.captionTracks.length; r++)
          ye.internalBinaryWrite(
            e.captionTracks[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        for (let r = 0; r < e.audioTracks.length; r++)
          Pn.internalBinaryWrite(
            e.audioTracks[r],
            t.tag(2, u.LengthDelimited).fork(),
            n,
          ).join();
        for (let r = 0; r < e.translationLanguages.length; r++)
          he.internalBinaryWrite(
            e.translationLanguages[r],
            t.tag(3, u.LengthDelimited).fork(),
            n,
          ).join();
        e.defaultAudioTrackIndex !== void 0 &&
          t.tag(4, u.Varint).int32(e.defaultAudioTrackIndex),
          e.defaultCaptionTrackIndex !== void 0 &&
            t.tag(6, u.Varint).int32(e.defaultCaptionTrackIndex);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Sn = new Gn(),
    Kn = class extends h {
      constructor() {
        super("youtube.response.player.CaptionTrack", [
          { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
          { no: 2, name: "name", kind: "message", T: () => W },
          { no: 3, name: "vssId", kind: "scalar", T: 9 },
          { no: 4, name: "languageCode", kind: "scalar", T: 9 },
          { no: 5, name: "kind", kind: "scalar", opt: !0, T: 9 },
          { no: 6, name: "rtl", kind: "scalar", opt: !0, T: 8 },
          { no: 7, name: "isTranslatable", kind: "scalar", T: 8 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.baseUrl = ""),
          (t.vssId = ""),
          (t.languageCode = ""),
          (t.isTranslatable = !1),
          e !== void 0 && y(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.baseUrl = e.string();
              break;
            case 2:
              r.name = W.internalBinaryRead(e, e.uint32(), n, r.name);
              break;
            case 3:
              r.vssId = e.string();
              break;
            case 4:
              r.languageCode = e.string();
              break;
            case 5:
              r.kind = e.string();
              break;
            case 6:
              r.rtl = e.bool();
              break;
            case 7:
              r.isTranslatable = e.bool();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.baseUrl !== "" && t.tag(1, u.LengthDelimited).string(e.baseUrl),
          e.name &&
            W.internalBinaryWrite(
              e.name,
              t.tag(2, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.vssId !== "" && t.tag(3, u.LengthDelimited).string(e.vssId),
          e.languageCode !== "" &&
            t.tag(4, u.LengthDelimited).string(e.languageCode),
          e.kind !== void 0 && t.tag(5, u.LengthDelimited).string(e.kind),
          e.rtl !== void 0 && t.tag(6, u.Varint).bool(e.rtl),
          e.isTranslatable !== !1 && t.tag(7, u.Varint).bool(e.isTranslatable);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ye = new Kn(),
    Jn = class extends h {
      constructor() {
        super("youtube.response.player.AudioTrack", [
          {
            no: 2,
            name: "captionTrackIndices",
            kind: "scalar",
            repeat: 2,
            T: 5,
          },
          {
            no: 3,
            name: "defaultCaptionTrackIndex",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
          {
            no: 4,
            name: "forcedCaptionTrackIndex",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
          { no: 5, name: "visibility", kind: "scalar", opt: !0, T: 5 },
          { no: 6, name: "hasDefaultTrack", kind: "scalar", opt: !0, T: 8 },
          { no: 7, name: "hasForcedTrack", kind: "scalar", opt: !0, T: 8 },
          { no: 8, name: "audioTrackId", kind: "scalar", opt: !0, T: 9 },
          {
            no: 11,
            name: "captionsInitialState",
            kind: "scalar",
            opt: !0,
            T: 5,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.captionTrackIndices = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 2:
              if (s === u.LengthDelimited)
                for (let g = e.int32() + e.pos; e.pos < g; )
                  r.captionTrackIndices.push(e.int32());
              else r.captionTrackIndices.push(e.int32());
              break;
            case 3:
              r.defaultCaptionTrackIndex = e.int32();
              break;
            case 4:
              r.forcedCaptionTrackIndex = e.int32();
              break;
            case 5:
              r.visibility = e.int32();
              break;
            case 6:
              r.hasDefaultTrack = e.bool();
              break;
            case 7:
              r.hasForcedTrack = e.bool();
              break;
            case 8:
              r.audioTrackId = e.string();
              break;
            case 11:
              r.captionsInitialState = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.captionTrackIndices.length; r++)
          t.tag(2, u.Varint).int32(e.captionTrackIndices[r]);
        e.defaultCaptionTrackIndex !== void 0 &&
          t.tag(3, u.Varint).int32(e.defaultCaptionTrackIndex),
          e.forcedCaptionTrackIndex !== void 0 &&
            t.tag(4, u.Varint).int32(e.forcedCaptionTrackIndex),
          e.visibility !== void 0 && t.tag(5, u.Varint).int32(e.visibility),
          e.hasDefaultTrack !== void 0 &&
            t.tag(6, u.Varint).bool(e.hasDefaultTrack),
          e.hasForcedTrack !== void 0 &&
            t.tag(7, u.Varint).bool(e.hasForcedTrack),
          e.audioTrackId !== void 0 &&
            t.tag(8, u.LengthDelimited).string(e.audioTrackId),
          e.captionsInitialState !== void 0 &&
            t.tag(11, u.Varint).int32(e.captionsInitialState);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Pn = new Jn(),
    _n = class extends h {
      constructor() {
        super("youtube.response.player.TranslationLanguage", [
          { no: 1, name: "languageCode", kind: "scalar", T: 9 },
          { no: 2, name: "languageName", kind: "message", T: () => W },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.languageCode = ""), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.languageCode = e.string();
              break;
            case 2:
              r.languageName = W.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.languageName,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.languageCode !== "" &&
          t.tag(1, u.LengthDelimited).string(e.languageCode),
          e.languageName &&
            W.internalBinaryWrite(
              e.languageName,
              t.tag(2, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    he = new _n(),
    Xn = class extends h {
      constructor() {
        super("youtube.response.player.AdSlot", [
          { no: 424701016, name: "render", kind: "message", T: () => Un },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 424701016:
              r.render = Un.internalBinaryRead(e, e.uint32(), n, r.render);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.render &&
          Un.internalBinaryWrite(
            e.render,
            t.tag(424701016, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    On = new Xn(),
    Yn = class extends h {
      constructor() {
        super("youtube.response.player.AdSlot.Render", []);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        return i ?? this.create();
      }
      internalBinaryWrite(e, t, n) {
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Un = new Yn();
  var tr = class extends h {
      constructor() {
        super("youtube.response.setting.Setting", [
          {
            no: 6,
            name: "settingItems",
            kind: "message",
            repeat: 1,
            T: () => _,
          },
          {
            no: 7,
            name: "CollectionItems",
            kind: "message",
            jsonName: "CollectionItems",
            repeat: 1,
            T: () => _,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.settingItems = []),
          (t.collectionItems = []),
          e !== void 0 && y(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 6:
              r.settingItems.push(_.internalBinaryRead(e, e.uint32(), n));
              break;
            case 7:
              r.collectionItems.push(_.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.settingItems.length; r++)
          _.internalBinaryWrite(
            e.settingItems[r],
            t.tag(6, u.LengthDelimited).fork(),
            n,
          ).join();
        for (let r = 0; r < e.collectionItems.length; r++)
          _.internalBinaryWrite(
            e.collectionItems[r],
            t.tag(7, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Gr = new tr(),
    nr = class extends h {
      constructor() {
        super("youtube.response.setting.SettingItem", [
          {
            no: 88478200,
            name: "backgroundPlayBackSettingRenderer",
            kind: "message",
            T: () => qn,
          },
          {
            no: 66930374,
            name: "settingCategoryCollectionRenderer",
            kind: "message",
            T: () => Zn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 88478200:
              r.backgroundPlayBackSettingRenderer = qn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.backgroundPlayBackSettingRenderer,
              );
              break;
            case 66930374:
              r.settingCategoryCollectionRenderer = Zn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.settingCategoryCollectionRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.backgroundPlayBackSettingRenderer &&
          qn
            .internalBinaryWrite(
              e.backgroundPlayBackSettingRenderer,
              t.tag(88478200, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.settingCategoryCollectionRenderer &&
            Zn.internalBinaryWrite(
              e.settingCategoryCollectionRenderer,
              t.tag(66930374, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    _ = new nr(),
    rr = class extends h {
      constructor() {
        super("youtube.response.setting.BackgroundPlayBackSettingRenderer", [
          { no: 1, name: "name", kind: "message", T: () => W },
          { no: 2, name: "backgroundPlayback", kind: "scalar", T: 8 },
          { no: 3, name: "download", kind: "scalar", T: 8 },
          { no: 5, name: "trackingParams", kind: "scalar", T: 12 },
          { no: 9, name: "downloadQualitySelection", kind: "scalar", T: 8 },
          { no: 10, name: "smartDownload", kind: "scalar", T: 8 },
          { no: 14, name: "icon", kind: "message", T: () => oe },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.backgroundPlayback = !1),
          (t.download = !1),
          (t.trackingParams = new Uint8Array(0)),
          (t.downloadQualitySelection = !1),
          (t.smartDownload = !1),
          e !== void 0 && y(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.name = W.internalBinaryRead(e, e.uint32(), n, r.name);
              break;
            case 2:
              r.backgroundPlayback = e.bool();
              break;
            case 3:
              r.download = e.bool();
              break;
            case 5:
              r.trackingParams = e.bytes();
              break;
            case 9:
              r.downloadQualitySelection = e.bool();
              break;
            case 10:
              r.smartDownload = e.bool();
              break;
            case 14:
              r.icon = oe.internalBinaryRead(e, e.uint32(), n, r.icon);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.name &&
          W.internalBinaryWrite(
            e.name,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.backgroundPlayback !== !1 &&
            t.tag(2, u.Varint).bool(e.backgroundPlayback),
          e.download !== !1 && t.tag(3, u.Varint).bool(e.download),
          e.trackingParams.length &&
            t.tag(5, u.LengthDelimited).bytes(e.trackingParams),
          e.downloadQualitySelection !== !1 &&
            t.tag(9, u.Varint).bool(e.downloadQualitySelection),
          e.smartDownload !== !1 && t.tag(10, u.Varint).bool(e.smartDownload),
          e.icon &&
            oe
              .internalBinaryWrite(
                e.icon,
                t.tag(14, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    qn = new rr(),
    ir = class extends h {
      constructor() {
        super("youtube.response.setting.SettingCategoryCollectionRenderer", [
          { no: 2, name: "name", kind: "message", T: () => W },
          {
            no: 3,
            name: "subSettings",
            kind: "message",
            repeat: 1,
            T: () => me,
          },
          { no: 4, name: "categoryId", kind: "scalar", T: 5 },
          { no: 5, name: "icon", kind: "message", T: () => oe },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.subSettings = []),
          (t.categoryId = 0),
          e !== void 0 && y(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 2:
              r.name = W.internalBinaryRead(e, e.uint32(), n, r.name);
              break;
            case 3:
              r.subSettings.push(me.internalBinaryRead(e, e.uint32(), n));
              break;
            case 4:
              r.categoryId = e.int32();
              break;
            case 5:
              r.icon = oe.internalBinaryRead(e, e.uint32(), n, r.icon);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.name &&
          W.internalBinaryWrite(
            e.name,
            t.tag(2, u.LengthDelimited).fork(),
            n,
          ).join();
        for (let r = 0; r < e.subSettings.length; r++)
          me.internalBinaryWrite(
            e.subSettings[r],
            t.tag(3, u.LengthDelimited).fork(),
            n,
          ).join();
        e.categoryId !== 0 && t.tag(4, u.Varint).int32(e.categoryId),
          e.icon &&
            oe
              .internalBinaryWrite(
                e.icon,
                t.tag(5, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Zn = new ir(),
    ar = class extends h {
      constructor() {
        super("youtube.response.setting.Icon", [
          { no: 1, name: "iconType", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.iconType = 0), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.iconType = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.iconType !== 0 && t.tag(1, u.Varint).int32(e.iconType);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    oe = new ar(),
    or = class extends h {
      constructor() {
        super("youtube.response.setting.SubSetting", [
          {
            no: 61331416,
            name: "settingBooleanRenderer",
            kind: "message",
            T: () => zn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 61331416:
              r.settingBooleanRenderer = zn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.settingBooleanRenderer,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.settingBooleanRenderer &&
          zn
            .internalBinaryWrite(
              e.settingBooleanRenderer,
              t.tag(61331416, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    me = new or(),
    sr = class extends h {
      constructor() {
        super("youtube.response.setting.SettingBooleanRenderer", [
          { no: 2, name: "title", kind: "message", T: () => W },
          { no: 3, name: "description", kind: "message", T: () => W },
          {
            no: 5,
            name: "enableServiceEndpoint",
            kind: "message",
            T: () => ae,
          },
          {
            no: 6,
            name: "disableServiceEndpoint",
            kind: "message",
            T: () => ae,
          },
          { no: 15, name: "itemId", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.itemId = 0), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 2:
              r.title = W.internalBinaryRead(e, e.uint32(), n, r.title);
              break;
            case 3:
              r.description = W.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.description,
              );
              break;
            case 5:
              r.enableServiceEndpoint = ae.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.enableServiceEndpoint,
              );
              break;
            case 6:
              r.disableServiceEndpoint = ae.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.disableServiceEndpoint,
              );
              break;
            case 15:
              r.itemId = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.title &&
          W.internalBinaryWrite(
            e.title,
            t.tag(2, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.description &&
            W.internalBinaryWrite(
              e.description,
              t.tag(3, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.enableServiceEndpoint &&
            ae
              .internalBinaryWrite(
                e.enableServiceEndpoint,
                t.tag(5, u.LengthDelimited).fork(),
                n,
              )
              .join(),
          e.disableServiceEndpoint &&
            ae
              .internalBinaryWrite(
                e.disableServiceEndpoint,
                t.tag(6, u.LengthDelimited).fork(),
                n,
              )
              .join(),
          e.itemId !== 0 && t.tag(15, u.Varint).int32(e.itemId);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    zn = new sr(),
    lr = class extends h {
      constructor() {
        super("youtube.response.setting.ServiceEndpoint", [
          {
            no: 81212182,
            name: "setClientSettingEndpoint",
            kind: "message",
            T: () => Hn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 81212182:
              r.setClientSettingEndpoint = Hn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.setClientSettingEndpoint,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.setClientSettingEndpoint &&
          Hn.internalBinaryWrite(
            e.setClientSettingEndpoint,
            t.tag(81212182, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ae = new lr(),
    cr = class extends h {
      constructor() {
        super("youtube.response.setting.SetClientSettingEndpoint", [
          { no: 1, name: "settingData", kind: "message", T: () => Qn },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.settingData = Qn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.settingData,
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.settingData &&
          Qn.internalBinaryWrite(
            e.settingData,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Hn = new cr(),
    dr = class extends h {
      constructor() {
        super("youtube.response.setting.SettingData", [
          { no: 1, name: "clientSettingEnum", kind: "message", T: () => er },
          { no: 3, name: "boolValue", kind: "scalar", T: 8 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.boolValue = !1), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.clientSettingEnum = er.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.clientSettingEnum,
              );
              break;
            case 3:
              r.boolValue = e.bool();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.clientSettingEnum &&
          er
            .internalBinaryWrite(
              e.clientSettingEnum,
              t.tag(1, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.boolValue !== !1 && t.tag(3, u.Varint).bool(e.boolValue);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Qn = new dr(),
    ur = class extends h {
      constructor() {
        super("youtube.response.setting.ClientSettingEnum", [
          { no: 1, name: "item", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.item = 0), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.item = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.item !== 0 && t.tag(1, u.Varint).int32(e.item);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    er = new ur();
  var pr = class extends h {
      constructor() {
        super("youtube.response.watch.Watch", [
          { no: 1, name: "contents", kind: "message", repeat: 1, T: () => fr },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.contents = []), e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 1:
              r.contents.push(fr.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.contents.length; r++)
          fr.internalBinaryWrite(
            e.contents[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Kr = new pr(),
    yr = class extends h {
      constructor() {
        super("youtube.response.watch.Content", [
          { no: 2, name: "player", kind: "message", T: () => ie },
          { no: 3, name: "next", kind: "message", T: () => te },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && y(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [o, s] = e.tag();
          switch (o) {
            case 2:
              r.player = ie.internalBinaryRead(e, e.uint32(), n, r.player);
              break;
            case 3:
              r.next = te.internalBinaryRead(e, e.uint32(), n, r.next);
              break;
            default:
              let a = n.readUnknownField;
              if (a === "throw")
                throw new globalThis.Error(
                  `Unknown field ${o} (wire type ${s}) for ${this.typeName}`,
                );
              let d = e.skip(s);
              a !== !1 && (a === !0 ? f.onRead : a)(this.typeName, r, o, s, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.player &&
          ie
            .internalBinaryWrite(
              e.player,
              t.tag(2, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.next &&
            te
              .internalBinaryWrite(
                e.next,
                t.tag(3, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    fr = new yr();
  var se = class {
      _times = new Map();
      name;
      isDebug;
      className;
      request;
      response;
      constructor(e, t, n) {
        (this.name = e ?? ""),
          (this.isDebug = n?.debug ?? !1),
          e && this.debug(`${e} Start`),
          (this.className = t ?? ""),
          this.init();
      }
      static getInstance(e, t) {
        let n = "Surge";
        return (
          typeof $loon < "u"
            ? (n = "Loon")
            : typeof $task < "u" && (n = "QuanX"),
          se.instances[n] || (se.instances[n] = se.classNames[n](e, n, t)),
          se.instances[n]
        );
      }
      createProxy(e) {
        return new Proxy(e, { get: this.getFn, set: this.setFn });
      }
      getFn(e, t, n) {
        return e[t];
      }
      setFn(e, t, n, i) {
        return (e[t] = n), !0;
      }
      getJSON(e, t = {}) {
        let n = this.getVal(e);
        return n ? JSON.parse(n) : t;
      }
      setJSON(e, t) {
        this.setVal(JSON.stringify(e), t);
      }
      msg(e = this.name, t = "", n = "", i) {}
      debug(e) {
        this.isDebug &&
          (typeof e == "object" && (e = JSON.stringify(e)), console.log(e));
      }
      log(e) {
        typeof e == "object" && (e = JSON.stringify(e)), console.log(e);
      }
      timeStart(e) {
        this._times.set(e, Date.now());
      }
      timeEnd(e) {
        if (this._times.has(e)) {
          let t = this._times.get(e) ?? 0,
            n = Date.now() - t;
          this.debug(`${e}: ${n}ms`), this._times.delete(e);
        } else this.debug(`Timer with label ${e} does not exist.`);
      }
      exit() {
        $done({});
      }
      reject() {
        $done();
      }
      decodeParams(e) {
        return e;
      }
    },
    v = se;
  de(v, "instances", {}),
    de(v, "classNames", {
      QuanX: (e, t, n) => new De(e, t, n),
      Surge: (e, t, n) => new ge(e, t, n),
      Loon: (e, t, n) => new hr(e, t, n),
    });
  var $e = class extends v {
      getFn(e, t, n) {
        let i = $e.clientAdapter[t] || t;
        return super.getFn(e, i, n);
      }
      setFn(e, t, n, i) {
        let r = $e.clientAdapter[t] || t;
        return super.setFn(e, r, n, i);
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.debug(e.toString());
        }
      }
      getVal(e) {
        return $persistentStore.read(e);
      }
      setVal(e, t) {
        $persistentStore.write(e, t);
      }
      msg(e = this.name, t = "", n = "", i) {
        let r = {};
        i && (r = { action: { "open-url": i } }),
          $notification.post(e, t, n, r);
      }
      async fetch(e) {
        return await new Promise((t, n) => {
          let { method: i, body: r, bodyBytes: c, ...o } = e,
            s = c ?? r,
            a = s instanceof Uint8Array;
          $httpClient[i.toLowerCase()](
            { ...o, body: s, "binary-mode": a },
            (d, g, b) => {
              d && n(d);
              let m = a ? "bodyBytes" : "body";
              t({
                status: g.status ?? g.statusCode,
                headers: g.headers,
                [m]: b,
              });
            },
          );
        });
      }
      done(e) {
        let t = e.response ?? e;
        t.bodyBytes && ((t.body = t.bodyBytes), delete t.bodyBytes), $done(t);
      }
      decodeParams(e) {
        return (
          typeof $argument == "string" &&
            !$argument.includes("{{{") &&
            Object.assign(e, JSON.parse($argument)),
          e
        );
      }
    },
    ge = $e;
  de(ge, "clientAdapter", { bodyBytes: "body" });
  var V = class extends v {
      static transferBodyBytes(e, t) {
        return e instanceof ArrayBuffer
          ? t === "Uint8Array"
            ? new Uint8Array(e)
            : e
          : e instanceof Uint8Array && t === "ArrayBuffer"
          ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset)
          : e;
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.debug(e.toString());
        }
      }
      getFn(e, t, n) {
        let i = V.clientAdapter[t] || t,
          r = super.getFn(e, i, n);
        return (
          t === "bodyBytes" && (r = V.transferBodyBytes(r, "Uint8Array")), r
        );
      }
      setFn(e, t, n, i) {
        let r = V.clientAdapter[t] || t,
          c = n;
        return (
          t === "bodyBytes" && (c = V.transferBodyBytes(c, "Uint8Array")),
          super.setFn(e, r, c, i)
        );
      }
      getVal(e) {
        return $prefs.valueForKey(e);
      }
      setVal(e, t) {
        $prefs.setValueForKey(e, t);
      }
      msg(e = this.name, t = "", n = "", i) {
        $notify(e, t, n, { "open-url": i ?? "" });
      }
      async fetch(e) {
        return await new Promise((t) => {
          let n = { url: "", method: "GET" };
          for (let [i, r] of Object.entries(e))
            i === "id"
              ? (n.sessionIndex = r)
              : i === "bodyBytes"
              ? (n.bodyBytes = V.transferBodyBytes(r, "ArrayBuffer"))
              : (n[i] = r);
          e.bodyBytes && delete n.body,
            $task.fetch(n).then((i) => {
              let r = { status: 200, headers: {} };
              for (let [c, o] of Object.entries(i))
                c === "sessionIndex"
                  ? (r.id = o)
                  : c === "bodyBytes"
                  ? (r.bodyBytes = V.transferBodyBytes(o, "Uint8Array"))
                  : c === "statusCode"
                  ? (r.status = o)
                  : (r[c] = o);
              t(r);
            });
        });
      }
      done(e) {
        let t = e.response ?? e,
          n = {};
        for (let [i, r] of Object.entries(t))
          i === "status"
            ? (n.status = `HTTP/1.1 ${r}`)
            : i === "bodyBytes"
            ? (n.bodyBytes = V.transferBodyBytes(r, "ArrayBuffer"))
            : (n[i] = r);
        $done(n);
      }
    },
    De = V;
  de(De, "clientAdapter", { id: "sessionIndex", status: "statusCode" });
  var hr = class extends ge {
    decodeParams(e) {
      if (typeof $argument < "u")
        for (let t of Object.keys(e)) {
          let n = $argument?.[t];
          n !== void 0 && (e[t] = n);
        }
      return e;
    }
  };
  var w = v.getInstance("YouTube");
  var G = class {
    name;
    needProcess;
    needSave;
    message;
    version = "1.0";
    whiteNo = [];
    blackNo = [];
    whiteEml = [];
    blackEml = ["inline_injection_entrypoint_layout.eml"];
    msgType;
    argument;
    decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
    constructor(e, t) {
      (this.name = t),
        (this.msgType = e),
        (this.argument = this.decodeArgument()),
        (w.isDebug = Boolean(this.argument.debug)),
        w.debug(this.name);
      let n = w.getJSON("YouTubeAdvertiseInfo");
      w.debug(`currentVersion:  ${this.version}`),
        w.debug(`storedVersion:  ${n.version}`),
        n?.version === this.version && Object.assign(this, n);
    }
    decodeArgument() {
      let e = {
        lyricLang: "zh-Hans",
        captionLang: "zh-Hans",
        blockUpload: !0,
        blockImmersive: !0,
        debug: !1,
      };
      return w.decodeParams(e);
    }
    fromBinary(e) {
      return e instanceof Uint8Array
        ? ((this.message = this.msgType.fromBinary(e)),
          w.debug(`raw: ${Math.floor(e.length / 1024)} kb`),
          this)
        : (w.log("YouTube can not get binaryBody"), w.exit(), this);
    }
    async modify() {
      let e = this.pure();
      return e instanceof Promise ? await e : e;
    }
    toBinary() {
      return this.msgType.toBinary(this.message);
    }
    listUnknownFields(e) {
      return f.list(e);
    }
    save() {
      if (this.needSave) {
        w.debug("Update Config");
        let e = {
          version: this.version,
          whiteNo: this.whiteNo,
          blackNo: this.blackNo,
          whiteEml: this.whiteEml,
          blackEml: this.blackEml,
        };
        w.debug(e), w.setJSON(e, "YouTubeAdvertiseInfo");
      }
    }
    done() {
      if ((this.save(), this.needProcess)) {
        w.timeStart("toBinary");
        let e = this.toBinary();
        w.timeEnd("toBinary"),
          w.debug(`modify: ${Math.floor(e.length / 1024)} kb`),
          w.done({ bodyBytes: e });
      } else w.debug("use $done({})"), w.exit();
    }
    iterate(e = {}, t, n) {
      let i = typeof e == "object" ? [e] : [];
      for (; i.length; ) {
        let r = i.pop(),
          c = Object.keys(r);
        for (let o of c) {
          if (o === t && n(r)) return;
          typeof r[o] == "object" && i.push(r[o]);
        }
      }
    }
    isAdvertise(e) {
      let t = this.listUnknownFields(e)[0];
      return t ? this.handleFieldNo(t) : this.handleFieldEml(e);
    }
    handleFieldNo(e) {
      let t = e.no;
      if (this.whiteNo.includes(t)) return !1;
      if (this.blackNo.includes(t)) return !0;
      let n = this.checkBufferIsAd(e);
      return (
        n ? this.blackNo.push(t) : this.whiteNo.push(t), (this.needSave = !0), n
      );
    }
    handleFieldEml(e) {
      let t = !1,
        n = "";
      return (
        this.iterate(e, "renderInfo", (i) => {
          if (
            ((n = i.renderInfo.layoutRender.eml.split("|")[0]),
            this.whiteEml.includes(n))
          )
            t = !1;
          else if (this.blackEml.includes(n) || /shorts(?!_pivot_item)/.test(n))
            t = !0;
          else {
            let r = i?.videoInfo?.videoContext?.videoContent;
            r &&
              ((t = this.checkUnknownFiled(r)),
              t ? this.blackEml.push(n) : this.whiteEml.push(n),
              (this.needSave = !0));
          }
          return !0;
        }),
        t
      );
    }
    checkBufferIsAd(e) {
      if (!e || e.data.length < 1e3) return !1;
      let t = e.data,
        n = [112, 97, 103, 101, 97, 100],
        i = t.length,
        r = n.length,
        c = new Int32Array(256).fill(r + 1);
      for (let s = 0; s < r; s++) c[n[s]] = r - s;
      let o = 0;
      for (; o <= i - r; ) {
        if (
          t[o] === n[0] &&
          t[o + 1] === n[1] &&
          t[o + 2] === n[2] &&
          t[o + 3] === n[3] &&
          t[o + 4] === n[4] &&
          t[o + 5] === n[5]
        )
          return !0;
        o += c[t[o + r]] || r + 1;
      }
      return !1;
    }
    checkUnknownFiled(e) {
      return e
        ? this.listUnknownFields(e)?.some((n) => this.checkBufferIsAd(n)) ?? !1
        : !1;
    }
    isShorts(e) {
      let t = !1;
      return (
        this.iterate(
          e,
          "eml",
          (n) => ((t = /shorts(?!_pivot_item)/.test(n.eml)), !0),
        ),
        t
      );
    }
  };
  function ni(l) {
    let n = ".",
      i = "+-a^+6",
      r = "+-3^+b+-f",
      c,
      o,
      s;
    for (c = [], o = 0, s = 0; s < l.length; s++) {
      let a = l.charCodeAt(s);
      128 > a
        ? (c[o++] = a)
        : (2048 > a
            ? (c[o++] = (a >> 6) | 192)
            : ((a & 64512) == 55296 &&
              s + 1 < l.length &&
              (l.charCodeAt(s + 1) & 64512) == 56320
                ? ((a =
                    65536 + ((a & 1023) << 10) + (l.charCodeAt(++s) & 1023)),
                  (c[o++] = (a >> 18) | 240),
                  (c[o++] = ((a >> 12) & 63) | 128))
                : (c[o++] = (a >> 12) | 224),
              (c[o++] = ((a >> 6) & 63) | 128)),
          (c[o++] = (a & 63) | 128));
    }
    for (l = 406644, o = 0; o < c.length; o++) (l += c[o]), (l = Jr(l, i));
    return (
      (l = Jr(l, r)),
      (l ^= 3293161072),
      0 > l && (l = (l & 2147483647) + 2147483648),
      (l %= 1e6),
      l.toString() + n + (l ^ 406644)
    );
  }
  function Jr(l, e) {
    let t = "a",
      n = "+",
      i;
    for (let r = 0; r < e.length - 2; r += 3)
      (i = e.charAt(r + 2)),
        (i = i >= t ? i.charCodeAt(0) - 87 : Number(i)),
        (i = e.charAt(r + 1) == n ? l >>> i : l << i),
        (l = e.charAt(r) == n ? (l + i) & 4294967295 : l ^ i);
    return l;
  }
  function _r(l, e) {
    return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${e}&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${ni(
      l,
    )}&q=${encodeURIComponent(l)}`;
  }
  var le = class extends G {
      constructor(e = jr, t = "Browse") {
        super(e, t);
      }
      async pure() {
        return (
          this.iterate(this.message, "sectionListSupportedRenderers", (e) => {
            for (
              let t = e.sectionListSupportedRenderers.length - 1;
              t >= 0;
              t--
            )
              this.removeCommonAD(e, t), this.removeShorts(e, t);
            return !0;
          }),
          await this.translate(),
          this
        );
      }
      removeCommonAD(e, t) {
        let i =
          e.sectionListSupportedRenderers[t]?.itemSectionRenderer
            ?.richItemContent;
        for (let r = i?.length - 1; r >= 0; r--)
          this.isAdvertise(i[r]) && (i.splice(r, 1), (this.needProcess = !0));
      }
      removeShorts(e, t) {
        let n = e.sectionListSupportedRenderers[t]?.shelfRenderer;
        this.isShorts(n) &&
          (e.sectionListSupportedRenderers.splice(t, 1),
          (this.needProcess = !0));
      }
      getBrowseId() {
        let e = "";
        return (
          this.iterate(this.message?.responseContext, "key", (t) => {
            if (t.key === "browse_id") return (e = t.value), !0;
          }),
          e
        );
      }
      async translate() {
        let e = this.argument.lyricLang?.trim();
        if (
          !(this.name === "Browse" && this.getBrowseId().startsWith("MPLYt")) ||
          e === "off"
        )
          return;
        let t = "",
          n,
          i = !1;
        if (
          (this.iterate(
            this.message,
            "timedLyricsContent",
            (s) => (
              (n = s.timedLyricsContent),
              (t = s.timedLyricsContent.runs.map((a) => a.text).join(`
`)),
              (i = !0),
              !0
            ),
          ),
          i ||
            this.iterate(
              this.message,
              "description",
              (s) => (
                (n = s.description.runs[0]),
                (t = s.description.runs[0].text),
                (i = !0),
                !0
              ),
            ),
          !i)
        )
          return;
        let r = e.split("-")[0],
          c = _r(t, e),
          o = await w.fetch({ method: "GET", url: c });
        if (o.status === 200 && o.body) {
          let s = JSON.parse(o.body),
            a = " & Translated by Google",
            d = s[2].includes(r);
          n.text
            ? ((n.text = s[0].map((g) => (d ? g[0] : g[1] + g[0] || ""))
                .join(`\r
`)),
              this.iterate(
                this.message,
                "footer",
                (g) => ((g.footer.runs[0].text += a), !0),
              ))
            : n.runs.length <= s[0].length &&
              (n.runs.forEach((g, b) => {
                g.text = d
                  ? s[0][b][0]
                  : g.text +
                    `
${s[0][b][0]}`;
              }),
              (n.footerLabel += a)),
            (this.needProcess = !0);
        }
      }
    },
    be = class extends le {
      constructor(e = te, t = "Next") {
        super(e, t);
      }
    },
    ke = class extends G {
      constructor(e = ie, t = "Player") {
        super(e, t);
      }
      pure() {
        return (
          this.message.adPlacements?.length &&
            (this.message.adPlacements.length = 0),
          this.message.adSlots?.length && (this.message.adSlots.length = 0),
          delete this.message?.playbackTracking?.pageadViewthroughconversion,
          this.addPlayAbility(),
          this.addTranslateCaption(),
          (this.needProcess = !0),
          this
        );
      }
      addPlayAbility() {
        let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
        typeof e == "object" && (e.active = !0),
          typeof this.message.playabilityStatus == "object" &&
            (this.message.playabilityStatus.backgroundPlayer = pe.create({
              backgroundPlayerRender: { active: !0 },
            }));
      }
      addTranslateCaption() {
        let e = this.argument.captionLang;
        e !== "off" &&
          this.iterate(this.message, "captionTracks", (t) => {
            let n = t.captionTracks,
              i = t.audioTracks;
            if (Array.isArray(n)) {
              let c = { [e]: 2, en: 1 },
                o = -1,
                s = 0;
              for (let a = 0; a < n.length; a++) {
                let d = n[a],
                  g = c[d.languageCode];
                g && g > o && ((o = g), (s = a)), (d.isTranslatable = !0);
              }
              if (o !== 2) {
                let a = ye.create({
                  baseUrl: n[s].baseUrl + `&tlang=${e}`,
                  name: { runs: [{ text: `@Enhance (${e})` }] },
                  vssId: `.${e}`,
                  languageCode: e,
                });
                n.push(a);
              }
              if (Array.isArray(i)) {
                let a = o === 2 ? s : n.length - 1;
                for (let d of i)
                  d.captionTrackIndices?.includes(a) ||
                    d.captionTrackIndices.push(a),
                    (d.defaultCaptionTrackIndex = a),
                    (d.captionsInitialState = 3);
              }
            }
            let r = {
              de: "Deutsch",
              ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
              fr: "Fran\xE7ais",
              fil: "Filipino",
              ko: "\uD55C\uAD6D\uC5B4",
              ja: "\u65E5\u672C\u8A9E",
              en: "English",
              vi: "Ti\u1EBFng Vi\u1EC7t",
              "zh-Hant": "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09",
              "zh-Hans": "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
              und: "@VirgilClyne",
            };
            return (
              (t.translationLanguages = Object.entries(r).map(([c, o]) =>
                he.create({
                  languageCode: c,
                  languageName: { runs: [{ text: o }] },
                }),
              )),
              !0
            );
          });
      }
    },
    Me = class extends le {
      constructor(e = Ar, t = "Search") {
        super(e, t);
      }
    },
    je = class extends G {
      constructor(e = Vr, t = "Shorts") {
        super(e, t);
      }
      pure() {
        let e = this.message.entries?.length;
        if (e)
          for (let t = e - 1; t >= 0; t--)
            this.message.entries[t].command?.reelWatchEndpoint?.overlay ||
              (this.message.entries.splice(t, 1), (this.needProcess = !0));
        return this;
      }
    },
    Ae = class extends G {
      constructor(e = vr, t = "Guide") {
        super(e, t);
      }
      pure() {
        let e = ["SPunlimited"];
        return (
          this.argument.blockUpload && e.push("FEuploads"),
          this.argument.blockImmersive && e.push("FEmusic_immersive"),
          this.iterate(this.message, "rendererItems", (t) => {
            for (let n = t.rendererItems.length - 1; n >= 0; n--) {
              let i =
                t.rendererItems[n]?.iconRender?.browseId ||
                t.rendererItems[n]?.labelRender?.browseId;
              e.includes(i) &&
                (t.rendererItems.splice(n, 1), (this.needProcess = !0));
            }
          }),
          this
        );
      }
    },
    Ve = class extends G {
      constructor(e = Gr, t = "Setting") {
        super(e, t);
      }
      pure() {
        this.iterate(this.message.settingItems, "categoryId", (t) => {
          if (t.categoryId === 10135) {
            let n = me.create({
              settingBooleanRenderer: {
                itemId: 0,
                enableServiceEndpoint: {
                  setClientSettingEndpoint: {
                    settingData: {
                      clientSettingEnum: { item: 151 },
                      boolValue: !0,
                    },
                  },
                },
                disableServiceEndpoint: {
                  setClientSettingEndpoint: {
                    settingData: {
                      clientSettingEnum: { item: 151 },
                      boolValue: !1,
                    },
                  },
                },
              },
            });
            t.subSettings.push(n);
          }
        });
        let e = _.create({
          backgroundPlayBackSettingRenderer: {
            backgroundPlayback: !0,
            download: !0,
            downloadQualitySelection: !0,
            smartDownload: !0,
            icon: { iconType: 1093 },
          },
        });
        return this.message.settingItems.push(e), (this.needProcess = !0), this;
      }
    },
    ve = class extends G {
      player;
      next;
      constructor(e = Kr, t = "Watch") {
        super(e, t), (this.player = new ke()), (this.next = new be());
      }
      async pure() {
        for (let e of this.message.contents)
          e.player &&
            ((this.player.message = e.player), await this.player.pure()),
            e.next && ((this.next.message = e.next), await this.next.pure()),
            (this.needProcess = !0);
        return this;
      }
    };
  var ri = new Map([
    ["browse", le],
    ["next", be],
    ["player", ke],
    ["search", Me],
    ["reel_watch_sequence", je],
    ["guide", Ae],
    ["get_setting", Ve],
    ["get_watch", ve],
  ]);
  function mr(l) {
    for (let [e, t] of ri.entries()) if (l.includes(e)) return new t();
    return null;
  }
  async function ii() {
    let l = mr(w.request.url);
    if (l) {
      let e = w.response.bodyBytes;
      w.timeStart("fromBinary"),
        l.fromBinary(e),
        w.timeEnd("fromBinary"),
        w.timeStart("modify"),
        await l.modify(),
        w.timeEnd("modify"),
        l.done();
    } else
      w.msg(
        "YouTube Enhance",
        "\u811A\u672C\u9700\u8981\u66F4\u65B0",
        "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0",
      ),
        w.exit();
  }
  ii().catch((l) => {
    w.log(l.toString());
  });
})();
