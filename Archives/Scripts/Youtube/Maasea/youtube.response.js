// https://raw.githubusercontent.com/Maasea/sgmodule/refs/heads/master/Script/Youtube/youtube.response.js
// Author @Maasea
// Build: 2025/3/30 17:50:34
(() => {
  var Ar = Object.defineProperty;
  var jr = (l, e, t) =>
    e in l
      ? Ar(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (l[e] = t);
  var ce = (l, e, t) => (jr(l, typeof e != "symbol" ? e + "" : e, t), t);
  (function (l) {
    function e() {}
    function t() {}
    var n = String.fromCharCode,
      i = {}.toString,
      r = i.call(l.SharedArrayBuffer),
      c = i(),
      a = l.Uint8Array,
      o = a || Array,
      s = a ? ArrayBuffer : o,
      d =
        s.isView ||
        function (B) {
          return B && "length" in B;
        },
      g = i.call(s.prototype);
    s = t.prototype;
    var b = l.TextEncoder,
      m = new (a ? Uint16Array : o)(32);
    (e.prototype.decode = function (B) {
      if (!d(B)) {
        var D = i.call(B);
        if (D !== g && D !== r && D !== c)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'",
          );
        B = a ? new o(B) : B || [];
      }
      for (
        var S = (D = ""),
          k = 0,
          T = B.length | 0,
          le = (T - 32) | 0,
          C,
          x,
          L = 0,
          _ = 0,
          A,
          $ = 0,
          j = -1;
        k < T;

      ) {
        for (
          C = k <= le ? 32 : (T - k) | 0;
          $ < C;
          k = (k + 1) | 0, $ = ($ + 1) | 0
        ) {
          switch (((x = B[k] & 255), x >> 4)) {
            case 15:
              if (((A = B[(k = (k + 1) | 0)] & 255), A >> 6 !== 2 || 247 < x)) {
                k = (k - 1) | 0;
                break;
              }
              (L = ((x & 7) << 6) | (A & 63)), (_ = 5), (x = 256);
            case 14:
              (A = B[(k = (k + 1) | 0)] & 255),
                (L <<= 6),
                (L |= ((x & 15) << 6) | (A & 63)),
                (_ = A >> 6 === 2 ? (_ + 4) | 0 : 24),
                (x = (x + 256) & 768);
            case 13:
            case 12:
              (A = B[(k = (k + 1) | 0)] & 255),
                (L <<= 6),
                (L |= ((x & 31) << 6) | (A & 63)),
                (_ = (_ + 7) | 0),
                k < T && A >> 6 === 2 && L >> _ && 1114112 > L
                  ? ((x = L),
                    (L = (L - 65536) | 0),
                    0 <= L &&
                      ((j = ((L >> 10) + 55296) | 0),
                      (x = ((L & 1023) + 56320) | 0),
                      31 > $
                        ? ((m[$] = j), ($ = ($ + 1) | 0), (j = -1))
                        : ((A = j), (j = x), (x = A))))
                  : ((x >>= 8), (k = (k - x - 1) | 0), (x = 65533)),
                (L = _ = 0),
                (C = k <= le ? 32 : (T - k) | 0);
            default:
              m[$] = x;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          m[$] = 65533;
        }
        if (
          ((S += n(
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
          32 > $ && (S = S.slice(0, ($ - 32) | 0)),
          k < T)
        ) {
          if (((m[0] = j), ($ = ~j >>> 31), (j = -1), S.length < D.length))
            continue;
        } else j !== -1 && (S += n(j));
        (D += S), (S = "");
      }
      return D;
    }),
      (s.encode = function (B) {
        B = B === void 0 ? "" : "" + B;
        var D = B.length | 0,
          S = new o(((D << 1) + 8) | 0),
          k,
          T = 0,
          le = !a;
        for (k = 0; k < D; k = (k + 1) | 0, T = (T + 1) | 0) {
          var C = B.charCodeAt(k) | 0;
          if (127 >= C) S[T] = C;
          else {
            if (2047 >= C) S[T] = 192 | (C >> 6);
            else {
              e: {
                if (55296 <= C)
                  if (56319 >= C) {
                    var x = B.charCodeAt((k = (k + 1) | 0)) | 0;
                    if (56320 <= x && 57343 >= x) {
                      if (((C = ((C << 10) + x - 56613888) | 0), 65535 < C)) {
                        (S[T] = 240 | (C >> 18)),
                          (S[(T = (T + 1) | 0)] = 128 | ((C >> 12) & 63)),
                          (S[(T = (T + 1) | 0)] = 128 | ((C >> 6) & 63)),
                          (S[(T = (T + 1) | 0)] = 128 | (C & 63));
                        continue;
                      }
                      break e;
                    }
                    C = 65533;
                  } else 57343 >= C && (C = 65533);
                !le &&
                  k << 1 < T &&
                  k << 1 < ((T - 7) | 0) &&
                  ((le = !0), (x = new o(3 * D)), x.set(S), (S = x));
              }
              (S[T] = 224 | (C >> 12)),
                (S[(T = (T + 1) | 0)] = 128 | ((C >> 6) & 63));
            }
            S[(T = (T + 1) | 0)] = 128 | (C & 63);
          }
        }
        return a ? S.subarray(0, T) : S.slice(0, T);
      }),
      b || ((l.TextDecoder = e), (l.TextEncoder = t));
  })(globalThis);
  function ke(l) {
    let e = typeof l;
    if (e == "object") {
      if (Array.isArray(l)) return "array";
      if (l === null) return "null";
    }
    return e;
  }
  function lr(l) {
    return l !== null && typeof l == "object" && !Array.isArray(l);
  }
  var M =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        "",
      ),
    Re = [];
  for (let l = 0; l < M.length; l++) Re[M[l].charCodeAt(0)] = l;
  Re["-".charCodeAt(0)] = M.indexOf("+");
  Re["_".charCodeAt(0)] = M.indexOf("/");
  function cr(l) {
    let e = (l.length * 3) / 4;
    l[l.length - 2] == "=" ? (e -= 2) : l[l.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e),
      n = 0,
      i = 0,
      r,
      c = 0;
    for (let a = 0; a < l.length; a++) {
      if (((r = Re[l.charCodeAt(a)]), r === void 0))
        switch (l[a]) {
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
  function dr(l) {
    let e = "",
      t = 0,
      n,
      i = 0;
    for (let r = 0; r < l.length; r++)
      switch (((n = l[r]), t)) {
        case 0:
          (e += M[n >> 2]), (i = (n & 3) << 4), (t = 1);
          break;
        case 1:
          (e += M[i | (n >> 4)]), (i = (n & 15) << 2), (t = 2);
          break;
        case 2:
          (e += M[i | (n >> 6)]), (e += M[n & 63]), (t = 0);
          break;
      }
    return t && ((e += M[i]), (e += "="), t == 1 && (e += "=")), e;
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
        for (let { no: r, wireType: c, data: a } of l.list(n))
          i.tag(r, c).raw(a);
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
  function ur() {
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
  function Be(l, e, t) {
    for (let r = 0; r < 28; r = r + 7) {
      let c = l >>> r,
        a = !(!(c >>> 7) && e == 0),
        o = (a ? c | 128 : c) & 255;
      if ((t.push(o), !a)) return;
    }
    let n = ((l >>> 28) & 15) | ((e & 7) << 4),
      i = !!(e >> 3);
    if ((t.push((i ? n | 128 : n) & 255), !!i)) {
      for (let r = 3; r < 31; r = r + 7) {
        let c = e >>> r,
          a = !!(c >>> 7),
          o = (a ? c | 128 : c) & 255;
        if ((t.push(o), !a)) return;
      }
      t.push((e >>> 31) & 1);
    }
  }
  var we = (1 << 16) * (1 << 16);
  function ve(l) {
    let e = l[0] == "-";
    e && (l = l.slice(1));
    let t = 1e6,
      n = 0,
      i = 0;
    function r(c, a) {
      let o = Number(l.slice(c, a));
      (i *= t),
        (n = n * t + o),
        n >= we && ((i = i + ((n / we) | 0)), (n = n % we));
    }
    return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, n, i];
  }
  function Ie(l, e) {
    if (e >>> 0 <= 2097151) return "" + (we * e + (l >>> 0));
    let t = l & 16777215,
      n = (((l >>> 24) | (e << 8)) >>> 0) & 16777215,
      i = (e >> 16) & 65535,
      r = t + n * 6777216 + i * 6710656,
      c = n + i * 8147497,
      a = i * 2,
      o = 1e7;
    r >= o && ((c += Math.floor(r / o)), (r %= o)),
      c >= o && ((a += Math.floor(c / o)), (c %= o));
    function s(d, g) {
      let b = d ? String(d) : "";
      return g ? "0000000".slice(b.length) + b : b;
    }
    return s(a, 0) + s(c, a) + s(r, 1);
  }
  function Ge(l, e) {
    if (l >= 0) {
      for (; l > 127; ) e.push((l & 127) | 128), (l = l >>> 7);
      e.push(l);
    } else {
      for (let t = 0; t < 9; t++) e.push((l & 127) | 128), (l = l >> 7);
      e.push(1);
    }
  }
  function fr() {
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
  function Mr() {
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
  Mr();
  function pr(l) {
    if (!l)
      throw new Error(
        "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support",
      );
  }
  var hr = /^-?[0-9]+$/,
    Ne = 4294967296,
    Te = 2147483648,
    We = class {
      constructor(e, t) {
        (this.lo = e | 0), (this.hi = t | 0);
      }
      isZero() {
        return this.lo == 0 && this.hi == 0;
      }
      toNumber() {
        let e = this.hi * Ne + (this.lo >>> 0);
        if (!Number.isSafeInteger(e))
          throw new Error("cannot convert to safe number");
        return e;
      }
    },
    O = class extends We {
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
                new O(N.V.getInt32(0, !0), N.V.getInt32(4, !0))
              );
          }
        else
          switch (typeof e) {
            case "string":
              if (e == "0") return this.ZERO;
              if (((e = e.trim()), !hr.test(e)))
                throw new Error("string is no integer");
              let [t, n, i] = ve(e);
              if (t) throw new Error("signed value for ulong");
              return new O(n, i);
            case "number":
              if (e == 0) return this.ZERO;
              if (!Number.isSafeInteger(e))
                throw new Error("number is no integer");
              if (e < 0) throw new Error("signed value for ulong");
              return new O(e, e / Ne);
          }
        throw new Error("unknown value " + typeof e);
      }
      toString() {
        return N ? this.toBigInt().toString() : Ie(this.lo, this.hi);
      }
      toBigInt() {
        return (
          pr(N),
          N.V.setInt32(0, this.lo, !0),
          N.V.setInt32(4, this.hi, !0),
          N.V.getBigUint64(0, !0)
        );
      }
    };
  O.ZERO = new O(0, 0);
  var I = class extends We {
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
              new I(N.V.getInt32(0, !0), N.V.getInt32(4, !0))
            );
        }
      else
        switch (typeof e) {
          case "string":
            if (e == "0") return this.ZERO;
            if (((e = e.trim()), !hr.test(e)))
              throw new Error("string is no integer");
            let [t, n, i] = ve(e);
            if (t) {
              if (i > Te || (i == Te && n != 0))
                throw new Error("signed long too small");
            } else if (i >= Te) throw new Error("signed long too large");
            let r = new I(n, i);
            return t ? r.negate() : r;
          case "number":
            if (e == 0) return this.ZERO;
            if (!Number.isSafeInteger(e))
              throw new Error("number is no integer");
            return e > 0 ? new I(e, e / Ne) : new I(-e, -e / Ne).negate();
        }
      throw new Error("unknown value " + typeof e);
    }
    isNegative() {
      return (this.hi & Te) !== 0;
    }
    negate() {
      let e = ~this.hi,
        t = this.lo;
      return t ? (t = ~t + 1) : (e += 1), new I(t, e);
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
        pr(N),
        N.V.setInt32(0, this.lo, !0),
        N.V.setInt32(4, this.hi, !0),
        N.V.getBigInt64(0, !0)
      );
    }
  };
  I.ZERO = new I(0, 0);
  var yr = { readUnknownField: !0, readerFactory: (l) => new Ke(l) };
  function mr(l) {
    return l ? Object.assign(Object.assign({}, yr), l) : yr;
  }
  var Ke = class {
    constructor(e, t) {
      (this.varint64 = ur),
        (this.uint32 = fr),
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
      return new I(...this.varint64());
    }
    uint64() {
      return new O(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        n = -(e & 1);
      return (
        (e = ((e >>> 1) | ((t & 1) << 31)) ^ n),
        (t = (t >>> 1) ^ n),
        new I(e, t)
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
      return new O(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return new I(this.sfixed32(), this.sfixed32());
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
  var Vr = 34028234663852886e22,
    vr = -34028234663852886e22,
    Gr = 4294967295,
    Kr = 2147483647,
    Jr = -2147483648;
  function K(l) {
    if (typeof l != "number") throw new Error("invalid int 32: " + typeof l);
    if (!Number.isInteger(l) || l > Kr || l < Jr)
      throw new Error("invalid int 32: " + l);
  }
  function X(l) {
    if (typeof l != "number") throw new Error("invalid uint 32: " + typeof l);
    if (!Number.isInteger(l) || l > Gr || l < 0)
      throw new Error("invalid uint 32: " + l);
  }
  function z(l) {
    if (typeof l != "number") throw new Error("invalid float 32: " + typeof l);
    if (Number.isFinite(l) && (l > Vr || l < vr))
      throw new Error("invalid float 32: " + l);
  }
  var gr = { writeUnknownFields: !0, writerFactory: () => new Je() };
  function br(l) {
    return l ? Object.assign(Object.assign({}, gr), l) : gr;
  }
  var Je = class {
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
      for (X(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
      return this.buf.push(e), this;
    }
    int32(e) {
      return K(e), Ge(e, this.buf), this;
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
      z(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
    }
    double(e) {
      let t = new Uint8Array(8);
      return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
    }
    fixed32(e) {
      X(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
    }
    sfixed32(e) {
      K(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
    }
    sint32(e) {
      return K(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), Ge(e, this.buf), this;
    }
    sfixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        i = I.from(e);
      return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t);
    }
    fixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        i = O.from(e);
      return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t);
    }
    int64(e) {
      let t = I.from(e);
      return Be(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
      let t = I.from(e),
        n = t.hi >> 31,
        i = (t.lo << 1) ^ n,
        r = ((t.hi << 1) | (t.lo >>> 31)) ^ n;
      return Be(i, r, this.buf), this;
    }
    uint64(e) {
      let t = O.from(e);
      return Be(t.lo, t.hi, this.buf), this;
    }
  };
  var kr = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    },
    Rr = { ignoreUnknownFields: !1 };
  function wr(l) {
    return l ? Object.assign(Object.assign({}, Rr), l) : Rr;
  }
  function Br(l) {
    return l ? Object.assign(Object.assign({}, kr), l) : kr;
  }
  var Se = Symbol.for("protobuf-ts/message-type");
  function _e(l) {
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
  var de;
  (function (l) {
    (l[(l.NO = 0)] = "NO"),
      (l[(l.PACKED = 1)] = "PACKED"),
      (l[(l.UNPACKED = 2)] = "UNPACKED");
  })(de || (de = {}));
  function Ir(l) {
    var e, t, n, i;
    return (
      (l.localName =
        (e = l.localName) !== null && e !== void 0 ? e : _e(l.name)),
      (l.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : _e(l.name)),
      (l.repeat = (n = l.repeat) !== null && n !== void 0 ? n : de.NO),
      (l.opt =
        (i = l.opt) !== null && i !== void 0
          ? i
          : l.repeat || l.oneof
          ? !1
          : l.kind == "message"),
      l
    );
  }
  function Tr(l) {
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
  var xe = class {
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
        let a = e[c];
        if (!Tr(a)) return !1;
        if (a.oneofKind === void 0) continue;
        let o = this.fields.find((s) => s.localName === a.oneofKind);
        if (!o || !this.field(a[a.oneofKind], o, n, t)) return !1;
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
        let i = ke(n);
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
        let a = this.fMap[r];
        if (!a) {
          if (!n.ignoreUnknownFields)
            throw new Error(
              `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`,
            );
          continue;
        }
        let o = a.localName,
          s;
        if (a.oneof) {
          if (
            c === null &&
            (a.kind !== "enum" || a.T()[0] !== "google.protobuf.NullValue")
          )
            continue;
          if (i.includes(a.oneof))
            throw new Error(
              `Multiple members of the oneof group "${a.oneof}" of ${this.info.typeName} are present in JSON.`,
            );
          i.push(a.oneof), (s = t[a.oneof] = { oneofKind: o });
        } else s = t;
        if (a.kind == "map") {
          if (c === null) continue;
          this.assert(lr(c), a.name, c);
          let d = s[o];
          for (let [g, b] of Object.entries(c)) {
            this.assert(b !== null, a.name + " map value", null);
            let m;
            switch (a.V.kind) {
              case "message":
                m = a.V.T().internalJsonRead(b, n);
                break;
              case "enum":
                if (
                  ((m = this.enum(a.V.T(), b, a.name, n.ignoreUnknownFields)),
                  m === !1)
                )
                  continue;
                break;
              case "scalar":
                m = this.scalar(b, a.V.T, a.V.L, a.name);
                break;
            }
            this.assert(m !== void 0, a.name + " map value", b);
            let B = g;
            a.K == p.BOOL && (B = B == "true" ? !0 : B == "false" ? !1 : B),
              (B = this.scalar(B, a.K, E.STRING, a.name).toString()),
              (d[B] = m);
          }
        } else if (a.repeat) {
          if (c === null) continue;
          this.assert(Array.isArray(c), a.name, c);
          let d = s[o];
          for (let g of c) {
            this.assert(g !== null, a.name, null);
            let b;
            switch (a.kind) {
              case "message":
                b = a.T().internalJsonRead(g, n);
                break;
              case "enum":
                if (
                  ((b = this.enum(a.T(), g, a.name, n.ignoreUnknownFields)),
                  b === !1)
                )
                  continue;
                break;
              case "scalar":
                b = this.scalar(g, a.T, a.L, a.name);
                break;
            }
            this.assert(b !== void 0, a.name, c), d.push(b);
          }
        } else
          switch (a.kind) {
            case "message":
              if (c === null && a.T().typeName != "google.protobuf.Value") {
                this.assert(
                  a.oneof === void 0,
                  a.name + " (oneof member)",
                  null,
                );
                continue;
              }
              s[o] = a.T().internalJsonRead(c, n, s[o]);
              break;
            case "enum":
              let d = this.enum(a.T(), c, a.name, n.ignoreUnknownFields);
              if (d === !1) continue;
              s[o] = d;
              break;
            case "scalar":
              s[o] = this.scalar(c, a.T, a.L, a.name);
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
            return t == p.FLOAT && z(c), c;
          case p.INT32:
          case p.FIXED32:
          case p.SFIXED32:
          case p.SINT32:
          case p.UINT32:
            if (e === null) return 0;
            let a;
            if (
              (typeof e == "number"
                ? (a = e)
                : e === ""
                ? (r = "empty string")
                : typeof e == "string" &&
                  (e.trim().length !== e.length
                    ? (r = "extra whitespace")
                    : (a = Number(e))),
              a === void 0)
            )
              break;
            return t == p.UINT32 ? X(a) : K(a), a;
          case p.INT64:
          case p.SFIXED64:
          case p.SINT64:
            if (e === null) return F(I.ZERO, n);
            if (typeof e != "number" && typeof e != "string") break;
            return F(I.from(e), n);
          case p.FIXED64:
          case p.UINT64:
            if (e === null) return F(O.ZERO, n);
            if (typeof e != "number" && typeof e != "string") break;
            return F(O.from(e), n);
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
            } catch (o) {
              o = "invalid UTF8";
              break;
            }
            return e;
          case p.BYTES:
            if (e === null || e === "") return new Uint8Array(0);
            if (typeof e != "string") break;
            return cr(e);
        }
      } catch (c) {
        r = c.message;
      }
      this.assert(!1, i + (r ? " - " + r : ""), e);
    }
  };
  var Pe = class {
    constructor(e) {
      var t;
      this.fields = (t = e.fields) !== null && t !== void 0 ? t : [];
    }
    write(e, t) {
      let n = {},
        i = e;
      for (let r of this.fields) {
        if (!r.oneof) {
          let s = this.field(r, i[r.localName], t);
          s !== void 0 && (n[t.useProtoFieldName ? r.name : r.jsonName] = s);
          continue;
        }
        let c = i[r.oneof];
        if (c.oneofKind !== r.localName) continue;
        let a =
            r.kind == "scalar" || r.kind == "enum"
              ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 })
              : t,
          o = this.field(r, c[r.localName], a);
        R(o !== void 0), (n[t.useProtoFieldName ? r.name : r.jsonName] = o);
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
            for (let [o, s] of Object.entries(t)) {
              let d = this.scalar(e.V.T, s, e.name, !1, !0);
              R(d !== void 0), (r[o.toString()] = d);
            }
            break;
          case "message":
            let c = e.V.T();
            for (let [o, s] of Object.entries(t)) {
              let d = this.message(c, s, e.name, n);
              R(d !== void 0), (r[o.toString()] = d);
            }
            break;
          case "enum":
            let a = e.V.T();
            for (let [o, s] of Object.entries(t)) {
              R(s === void 0 || typeof s == "number");
              let d = this.enum(a, s, e.name, !1, !0, n.enumAsInteger);
              R(d !== void 0), (r[o.toString()] = d);
            }
            break;
        }
        (n.emitDefaultValues || Object.keys(r).length > 0) && (i = r);
      } else if (e.repeat) {
        R(Array.isArray(t));
        let r = [];
        switch (e.kind) {
          case "scalar":
            for (let o = 0; o < t.length; o++) {
              let s = this.scalar(e.T, t[o], e.name, e.opt, !0);
              R(s !== void 0), r.push(s);
            }
            break;
          case "enum":
            let c = e.T();
            for (let o = 0; o < t.length; o++) {
              R(t[o] === void 0 || typeof t[o] == "number");
              let s = this.enum(c, t[o], e.name, e.opt, !0, n.enumAsInteger);
              R(s !== void 0), r.push(s);
            }
            break;
          case "message":
            let a = e.T();
            for (let o = 0; o < t.length; o++) {
              let s = this.message(a, t[o], e.name, n);
              R(s !== void 0), r.push(s);
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
          return t === 0 ? (c ? 0 : void 0) : (X(t), t);
        case p.FLOAT:
          z(t);
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
          let a = O.from(t);
          return a.isZero() && !c ? void 0 : a.toString();
        case p.INT64:
        case p.SFIXED64:
        case p.SINT64:
          R(
            typeof t == "number" ||
              typeof t == "string" ||
              typeof t == "bigint",
          );
          let o = I.from(t);
          return o.isZero() && !c ? void 0 : o.toString();
        case p.BYTES:
          return (
            R(t instanceof Uint8Array), t.byteLength ? dr(t) : c ? "" : void 0
          );
      }
    }
  };
  function ue(l, e = E.STRING) {
    switch (l) {
      case p.BOOL:
        return !1;
      case p.UINT64:
      case p.FIXED64:
        return F(O.ZERO, e);
      case p.INT64:
      case p.SFIXED64:
      case p.SINT64:
        return F(I.ZERO, e);
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
        let [c, a] = e.tag(),
          o = this.fieldNoToField.get(c);
        if (!o) {
          let b = n.readUnknownField;
          if (b == "throw")
            throw new Error(
              `Unknown field ${c} (wire type ${a}) for ${this.info.typeName}`,
            );
          let m = e.skip(a);
          b !== !1 && (b === !0 ? f.onRead : b)(this.info.typeName, t, c, a, m);
          continue;
        }
        let s = t,
          d = o.repeat,
          g = o.localName;
        switch (
          (o.oneof &&
            ((s = s[o.oneof]),
            s.oneofKind !== g && (s = t[o.oneof] = { oneofKind: g })),
          o.kind)
        ) {
          case "scalar":
          case "enum":
            let b = o.kind == "enum" ? p.INT32 : o.T,
              m = o.kind == "scalar" ? o.L : void 0;
            if (d) {
              let S = s[g];
              if (a == u.LengthDelimited && b != p.STRING && b != p.BYTES) {
                let k = e.uint32() + e.pos;
                for (; e.pos < k; ) S.push(this.scalar(e, b, m));
              } else S.push(this.scalar(e, b, m));
            } else s[g] = this.scalar(e, b, m);
            break;
          case "message":
            if (d) {
              let S = s[g],
                k = o.T().internalBinaryRead(e, e.uint32(), n);
              S.push(k);
            } else s[g] = o.T().internalBinaryRead(e, e.uint32(), n, s[g]);
            break;
          case "map":
            let [B, D] = this.mapEntry(o, e, n);
            s[g][B] = D;
            break;
        }
      }
    }
    mapEntry(e, t, n) {
      let i = t.uint32(),
        r = t.pos + i,
        c,
        a;
      for (; t.pos < r; ) {
        let [o, s] = t.tag();
        switch (o) {
          case 1:
            e.K == p.BOOL
              ? (c = t.bool().toString())
              : (c = this.scalar(t, e.K, E.STRING));
            break;
          case 2:
            switch (e.V.kind) {
              case "scalar":
                a = this.scalar(t, e.V.T, e.V.L);
                break;
              case "enum":
                a = t.int32();
                break;
              case "message":
                a = e.V.T().internalBinaryRead(t, t.uint32(), n);
                break;
            }
            break;
          default:
            throw new Error(
              `Unknown field ${o} (wire type ${s}) in map entry for ${this.info.typeName}#${e.name}`,
            );
        }
      }
      if (c === void 0) {
        let o = ue(e.K);
        c = e.K == p.BOOL ? o.toString() : o;
      }
      if (a === void 0)
        switch (e.V.kind) {
          case "scalar":
            a = ue(e.V.T, e.V.L);
            break;
          case "enum":
            a = 0;
            break;
          case "message":
            a = e.V.T().create();
            break;
        }
      return [c, a];
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
  var Ue = class {
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
          a,
          o = r.repeat,
          s = r.localName;
        if (r.oneof) {
          let d = e[r.oneof];
          if (d.oneofKind !== s) continue;
          (c = d[s]), (a = !0);
        } else (c = e[s]), (a = !1);
        switch (r.kind) {
          case "scalar":
          case "enum":
            let d = r.kind == "enum" ? p.INT32 : r.T;
            if (o)
              if ((R(Array.isArray(c)), o == de.PACKED))
                this.packed(t, d, r.no, c);
              else for (let g of c) this.scalar(t, d, r.no, g, !0);
            else
              c === void 0 ? R(r.opt) : this.scalar(t, d, r.no, c, a || r.opt);
            break;
          case "message":
            if (o) {
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
      let [c, a, o] = this.scalarInfo(t, i);
      (!o || r) && (e.tag(n, c), e[a](i));
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
          (c = r || I.from(t).isZero()), (i = "int64");
          break;
        case p.UINT64:
          (c = r || O.from(t).isZero()), (i = "uint64");
          break;
        case p.FIXED64:
          (c = r || O.from(t).isZero()), (n = u.Bit64), (i = "fixed64");
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
          (c = r || I.from(t).isZero()), (n = u.Bit64), (i = "sfixed64");
          break;
        case p.SINT32:
          i = "sint32";
          break;
        case p.SINT64:
          (c = r || I.from(t).isZero()), (i = "sint64");
          break;
      }
      return [n, i, r || c];
    }
  };
  function Nr(l) {
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
              e[n] = ue(t.T, t.L);
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
  function h(l, e, t) {
    let n,
      i = t,
      r;
    for (let c of l.fields) {
      let a = c.localName;
      if (c.oneof) {
        let o = i[c.oneof];
        if (o?.oneofKind == null) continue;
        if (
          ((n = o[a]), (r = e[c.oneof]), (r.oneofKind = o.oneofKind), n == null)
        ) {
          delete r[a];
          continue;
        }
      } else if (((n = i[a]), (r = e), n == null)) continue;
      switch ((c.repeat && (r[a].length = n.length), c.kind)) {
        case "scalar":
        case "enum":
          if (c.repeat) for (let s = 0; s < n.length; s++) r[a][s] = n[s];
          else r[a] = n;
          break;
        case "message":
          let o = c.T();
          if (c.repeat)
            for (let s = 0; s < n.length; s++) r[a][s] = o.create(n[s]);
          else r[a] === void 0 ? (r[a] = o.create(n)) : o.mergePartial(r[a], n);
          break;
        case "map":
          switch (c.V.kind) {
            case "scalar":
            case "enum":
              Object.assign(r[a], n);
              break;
            case "message":
              let s = c.V.T();
              for (let d of Object.keys(n)) r[a][d] = s.create(n[d]);
              break;
          }
          break;
      }
    }
  }
  function xr(l, e, t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    for (let n of l.fields) {
      let i = n.localName,
        r = n.oneof ? e[n.oneof][i] : e[i],
        c = n.oneof ? t[n.oneof][i] : t[i];
      switch (n.kind) {
        case "enum":
        case "scalar":
          let a = n.kind == "enum" ? p.INT32 : n.T;
          if (!(n.repeat ? Wr(a, r, c) : Or(a, r, c))) return !1;
          break;
        case "map":
          if (
            !(n.V.kind == "message"
              ? Sr(n.V.T(), Ee(r), Ee(c))
              : Wr(n.V.kind == "enum" ? p.INT32 : n.V.T, Ee(r), Ee(c)))
          )
            return !1;
          break;
        case "message":
          let o = n.T();
          if (!(n.repeat ? Sr(o, r, c) : o.equals(r, c))) return !1;
          break;
      }
    }
    return !0;
  }
  var Ee = Object.values;
  function Or(l, e, t) {
    if (e === t) return !0;
    if (l !== p.BYTES) return !1;
    let n = e,
      i = t;
    if (n.length !== i.length) return !1;
    for (let r = 0; r < n.length; r++) if (n[r] != i[r]) return !1;
    return !0;
  }
  function Wr(l, e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!Or(l, e[n], t[n])) return !1;
    return !0;
  }
  function Sr(l, e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!l.equals(e[n], t[n])) return !1;
    return !0;
  }
  var _r = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})),
    y = class {
      constructor(e, t, n) {
        (this.defaultCheckDepth = 16),
          (this.typeName = e),
          (this.fields = t.map(Ir)),
          (this.options = n ?? {}),
          (this.messagePrototype = Object.create(
            null,
            Object.assign(Object.assign({}, _r), { [Se]: { value: this } }),
          )),
          (this.refTypeCheck = new xe(this)),
          (this.refJsonReader = new Oe(this)),
          (this.refJsonWriter = new Pe(this)),
          (this.refBinReader = new Ce(this)),
          (this.refBinWriter = new Ue(this));
      }
      create(e) {
        let t = Nr(this);
        return e !== void 0 && h(this, t, e), t;
      }
      clone(e) {
        let t = this.create();
        return h(this, t, e), t;
      }
      equals(e, t) {
        return xr(this, e, t);
      }
      is(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !1);
      }
      isAssignable(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !0);
      }
      mergePartial(e, t) {
        h(this, e, t);
      }
      fromBinary(e, t) {
        let n = mr(t);
        return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n);
      }
      fromJson(e, t) {
        return this.internalJsonRead(e, wr(t));
      }
      fromJsonString(e, t) {
        let n = JSON.parse(e);
        return this.fromJson(n, t);
      }
      toJson(e, t) {
        return this.internalJsonWrite(e, Br(t));
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
        let n = br(t);
        return this.internalBinaryWrite(e, n.writerFactory(), n).finish();
      }
      internalJsonRead(e, t, n) {
        if (e !== null && typeof e == "object" && !Array.isArray(e)) {
          let i = n ?? this.create();
          return this.refJsonReader.read(e, i, t), i;
        }
        throw new Error(
          `Unable to parse message ${this.typeName} from JSON ${ke(e)}.`,
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
  var Xe = class extends y {
      constructor() {
        super("youtube.component.Label", [
          { no: 1, name: "runs", kind: "message", repeat: 1, T: () => Y },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.runs = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.runs.push(Y.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.runs.length; r++)
          Y.internalBinaryWrite(
            e.runs[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    W = new Xe(),
    Ye = class extends y {
      constructor() {
        super("youtube.component.Run", [
          { no: 1, name: "text", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.text = ""), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.text = e.string();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    Y = new Ye();
  var ze = class extends y {
      constructor() {
        super("youtube.component.ResponseContext", [
          {
            no: 6,
            name: "serviceTrackingParams",
            kind: "message",
            repeat: 1,
            T: () => qe,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.serviceTrackingParams = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 6:
              r.serviceTrackingParams.push(
                qe.internalBinaryRead(e, e.uint32(), n),
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.serviceTrackingParams.length; r++)
          qe.internalBinaryWrite(
            e.serviceTrackingParams[r],
            t.tag(6, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Le = new ze(),
    He = class extends y {
      constructor() {
        super("youtube.component.ServiceTrackingParam", [
          { no: 1, name: "service", kind: "scalar", T: 5 },
          { no: 2, name: "params", kind: "message", repeat: 1, T: () => Ze },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.service = 0), (t.params = []), e !== void 0 && h(this, t, e), t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.service = e.int32();
              break;
            case 2:
              r.params.push(Ze.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.service !== 0 && t.tag(1, u.Varint).int32(e.service);
        for (let r = 0; r < e.params.length; r++)
          Ze.internalBinaryWrite(
            e.params[r],
            t.tag(2, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    qe = new He(),
    Qe = class extends y {
      constructor() {
        super("youtube.component.Param", [
          { no: 1, name: "key", kind: "scalar", T: 9 },
          { no: 2, name: "value", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.key = ""), (t.value = ""), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.key = e.string();
              break;
            case 2:
              r.value = e.string();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    Ze = new Qe();
  var mt = class extends y {
      constructor() {
        super("youtube.response.browse.Browse", [
          { no: 1, name: "responseContext", kind: "message", T: () => Le },
          { no: 9, name: "content", kind: "message", T: () => U },
          {
            no: 10,
            name: "onResponseReceivedAction",
            kind: "message",
            T: () => U,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.responseContext = Le.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.responseContext,
              );
              break;
            case 9:
              r.content = U.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            case 10:
              r.onResponseReceivedAction = U.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.onResponseReceivedAction,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.responseContext &&
          Le.internalBinaryWrite(
            e.responseContext,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.content &&
            U.internalBinaryWrite(
              e.content,
              t.tag(9, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.onResponseReceivedAction &&
            U.internalBinaryWrite(
              e.onResponseReceivedAction,
              t.tag(10, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Pr = new mt(),
    gt = class extends y {
      constructor() {
        super("youtube.response.browse.Content", [
          {
            no: 58173949,
            name: "singleColumnResultsRenderer",
            kind: "message",
            T: () => et,
          },
          {
            no: 153515154,
            name: "elementRenderer",
            kind: "message",
            T: () => Q,
          },
          {
            no: 49399797,
            name: "sectionListRenderer",
            kind: "message",
            T: () => q,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 58173949:
              r.singleColumnResultsRenderer = et.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.singleColumnResultsRenderer,
              );
              break;
            case 153515154:
              r.elementRenderer = Q.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.elementRenderer,
              );
              break;
            case 49399797:
              r.sectionListRenderer = q.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.sectionListRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.singleColumnResultsRenderer &&
          et
            .internalBinaryWrite(
              e.singleColumnResultsRenderer,
              t.tag(58173949, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.elementRenderer &&
            Q.internalBinaryWrite(
              e.elementRenderer,
              t.tag(153515154, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.sectionListRenderer &&
            q
              .internalBinaryWrite(
                e.sectionListRenderer,
                t.tag(49399797, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    U = new gt(),
    bt = class extends y {
      constructor() {
        super("youtube.response.browse.SingleColumnResultsRenderer", [
          { no: 1, name: "tabs", kind: "message", repeat: 1, T: () => tt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.tabs = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.tabs.push(tt.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.tabs.length; r++)
          tt.internalBinaryWrite(
            e.tabs[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    et = new bt(),
    kt = class extends y {
      constructor() {
        super("youtube.response.browse.BrowseTabSupportedRenderer", [
          { no: 58174010, name: "tabRenderer", kind: "message", T: () => nt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 58174010:
              r.tabRenderer = nt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.tabRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.tabRenderer &&
          nt
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
    tt = new kt(),
    Rt = class extends y {
      constructor() {
        super("youtube.response.browse.TabRenderer", [
          { no: 4, name: "content", kind: "message", T: () => U },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 4:
              r.content = U.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.content &&
          U.internalBinaryWrite(
            e.content,
            t.tag(4, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    nt = new Rt(),
    wt = class extends y {
      constructor() {
        super("youtube.response.browse.SectionListRenderer", [
          {
            no: 1,
            name: "sectionListSupportedRenderers",
            kind: "message",
            repeat: 1,
            T: () => rt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.sectionListSupportedRenderers = []),
          e !== void 0 && h(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.sectionListSupportedRenderers.push(
                rt.internalBinaryRead(e, e.uint32(), n),
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.sectionListSupportedRenderers.length; r++)
          rt.internalBinaryWrite(
            e.sectionListSupportedRenderers[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    q = new wt(),
    Bt = class extends y {
      constructor() {
        super("youtube.response.browse.SectionListSupportedRenderer", [
          {
            no: 50195462,
            name: "itemSectionRenderer",
            kind: "message",
            T: () => Z,
          },
          { no: 51845067, name: "shelfRenderer", kind: "message", T: () => ft },
          {
            no: 221496734,
            name: "musicDescriptionShelfRenderer",
            kind: "message",
            T: () => yt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 50195462:
              r.itemSectionRenderer = Z.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.itemSectionRenderer,
              );
              break;
            case 51845067:
              r.shelfRenderer = ft.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.shelfRenderer,
              );
              break;
            case 221496734:
              r.musicDescriptionShelfRenderer = yt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.musicDescriptionShelfRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.itemSectionRenderer &&
          Z.internalBinaryWrite(
            e.itemSectionRenderer,
            t.tag(50195462, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.shelfRenderer &&
            ft
              .internalBinaryWrite(
                e.shelfRenderer,
                t.tag(51845067, u.LengthDelimited).fork(),
                n,
              )
              .join(),
          e.musicDescriptionShelfRenderer &&
            yt
              .internalBinaryWrite(
                e.musicDescriptionShelfRenderer,
                t.tag(221496734, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    rt = new Bt(),
    It = class extends y {
      constructor() {
        super("youtube.response.browse.ItemSectionRenderer", [
          {
            no: 1,
            name: "richItemContents",
            kind: "message",
            repeat: 1,
            T: () => H,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.richItemContents = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.richItemContents.push(H.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.richItemContents.length; r++)
          H.internalBinaryWrite(
            e.richItemContents[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Z = new It(),
    Tt = class extends y {
      constructor() {
        super("youtube.response.browse.RichItemContent", [
          {
            no: 153515154,
            name: "videoWithContextRenderer",
            kind: "message",
            T: () => Q,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 153515154:
              r.videoWithContextRenderer = Q.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoWithContextRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoWithContextRenderer &&
          Q.internalBinaryWrite(
            e.videoWithContextRenderer,
            t.tag(153515154, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    H = new Tt(),
    Nt = class extends y {
      constructor() {
        super("youtube.response.browse.ElementRenderer", [
          {
            no: 172660663,
            name: "videoRendererContent",
            kind: "message",
            T: () => it,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 172660663:
              r.videoRendererContent = it.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoRendererContent,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoRendererContent &&
          it
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
    Q = new Nt(),
    Wt = class extends y {
      constructor() {
        super("youtube.response.browse.VideoRendererContent", [
          { no: 1, name: "videoInfo", kind: "message", T: () => at },
          { no: 2, name: "renderInfo", kind: "message", T: () => dt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.videoInfo = at.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoInfo,
              );
              break;
            case 2:
              r.renderInfo = dt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.renderInfo,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoInfo &&
          at
            .internalBinaryWrite(
              e.videoInfo,
              t.tag(1, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.renderInfo &&
            dt
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
    it = new Wt(),
    St = class extends y {
      constructor() {
        super("youtube.response.browse.VideoInfo", [
          { no: 168777401, name: "videoContext", kind: "message", T: () => st },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 168777401:
              r.videoContext = st.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoContext,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoContext &&
          st
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
    at = new St(),
    xt = class extends y {
      constructor() {
        super("youtube.response.browse.VideoContext", [
          { no: 5, name: "videoContent", kind: "message", T: () => ot },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 5:
              r.videoContent = ot.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videoContent,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videoContent &&
          ot
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
    st = new xt(),
    Ot = class extends y {
      constructor() {
        super("youtube.response.browse.VideoContent", [
          {
            no: 465160965,
            name: "timedLyricsRender",
            kind: "message",
            T: () => lt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 465160965:
              r.timedLyricsRender = lt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.timedLyricsRender,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.timedLyricsRender &&
          lt
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
    ot = new Ot(),
    Pt = class extends y {
      constructor() {
        super("youtube.response.browse.TimedLyricsRender", [
          { no: 4, name: "timedLyricsContent", kind: "message", T: () => ct },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 4:
              r.timedLyricsContent = ct.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.timedLyricsContent,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.timedLyricsContent &&
          ct
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
    lt = new Pt(),
    Ct = class extends y {
      constructor() {
        super("youtube.response.browse.TimedLyricsContent", [
          { no: 1, name: "runs", kind: "message", repeat: 1, T: () => Y },
          { no: 2, name: "footerLabel", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.runs = []), (t.footerLabel = ""), e !== void 0 && h(this, t, e), t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.runs.push(Y.internalBinaryRead(e, e.uint32(), n));
              break;
            case 2:
              r.footerLabel = e.string();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.runs.length; r++)
          Y.internalBinaryWrite(
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
    ct = new Ct(),
    Ut = class extends y {
      constructor() {
        super("youtube.response.browse.RenderInfo", [
          { no: 183314536, name: "layoutRender", kind: "message", T: () => ut },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 183314536:
              r.layoutRender = ut.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.layoutRender,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.layoutRender &&
          ut
            .internalBinaryWrite(
              e.layoutRender,
              t.tag(183314536, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    dt = new Ut(),
    Et = class extends y {
      constructor() {
        super("youtube.response.browse.LayoutRender", [
          { no: 1, name: "eml", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.eml = ""), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.eml = e.string();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    ut = new Et(),
    Lt = class extends y {
      constructor() {
        super("youtube.response.browse.ShelfRenderer", [
          { no: 5, name: "richSectionContent", kind: "message", T: () => pt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 5:
              r.richSectionContent = pt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.richSectionContent,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.richSectionContent &&
          pt
            .internalBinaryWrite(
              e.richSectionContent,
              t.tag(5, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ft = new Lt(),
    Ft = class extends y {
      constructor() {
        super("youtube.response.browse.RichSectionContent", [
          {
            no: 51431404,
            name: "reelShelfRenderer",
            kind: "message",
            T: () => ht,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 51431404:
              r.reelShelfRenderer = ht.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.reelShelfRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.reelShelfRenderer &&
          ht
            .internalBinaryWrite(
              e.reelShelfRenderer,
              t.tag(51431404, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    pt = new Ft(),
    Dt = class extends y {
      constructor() {
        super("youtube.response.browse.ReelShelfRenderer", [
          {
            no: 1,
            name: "richItemContents",
            kind: "message",
            repeat: 1,
            T: () => H,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.richItemContents = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.richItemContents.push(H.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.richItemContents.length; r++)
          H.internalBinaryWrite(
            e.richItemContents[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ht = new Dt(),
    $t = class extends y {
      constructor() {
        super("youtube.response.browse.MusicDescriptionShelfRenderer", [
          { no: 3, name: "description", kind: "message", T: () => W },
          { no: 10, name: "footer", kind: "message", T: () => W },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
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
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    yt = new $t();
  var Mt = class extends y {
      constructor() {
        super("youtube.response.next.Next", [
          { no: 7, name: "content", kind: "message", T: () => At },
          {
            no: 8,
            name: "onResponseReceivedAction",
            kind: "message",
            T: () => U,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 7:
              r.content = At.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            case 8:
              r.onResponseReceivedAction = U.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.onResponseReceivedAction,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.content &&
          At.internalBinaryWrite(
            e.content,
            t.tag(7, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.onResponseReceivedAction &&
            U.internalBinaryWrite(
              e.onResponseReceivedAction,
              t.tag(8, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ee = new Mt(),
    Vt = class extends y {
      constructor() {
        super("youtube.response.next.Content", [
          { no: 51779735, name: "nextResult", kind: "message", T: () => jt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 51779735:
              r.nextResult = jt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.nextResult,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.nextResult &&
          jt
            .internalBinaryWrite(
              e.nextResult,
              t.tag(51779735, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    At = new Vt(),
    vt = class extends y {
      constructor() {
        super("youtube.response.next.NextResult", [
          { no: 1, name: "content", kind: "message", T: () => U },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.content = U.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.content &&
          U.internalBinaryWrite(
            e.content,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    jt = new vt();
  var Kt = class extends y {
      constructor() {
        super("youtube.response.search.Search", [
          { no: 4, name: "content", kind: "message", T: () => U },
          {
            no: 7,
            name: "onResponseReceivedCommand",
            kind: "message",
            T: () => Gt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 4:
              r.content = U.internalBinaryRead(e, e.uint32(), n, r.content);
              break;
            case 7:
              r.onResponseReceivedCommand = Gt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.onResponseReceivedCommand,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.content &&
          U.internalBinaryWrite(
            e.content,
            t.tag(4, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.onResponseReceivedCommand &&
            Gt.internalBinaryWrite(
              e.onResponseReceivedCommand,
              t.tag(7, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Cr = new Kt(),
    Jt = class extends y {
      constructor() {
        super("youtube.response.search.OnResponseReceivedCommand", [
          {
            no: 50195462,
            name: "itemSectionRenderer",
            kind: "message",
            T: () => Z,
          },
          {
            no: 49399797,
            name: "appendContinuationItemsAction",
            kind: "message",
            T: () => q,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 50195462:
              r.itemSectionRenderer = Z.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.itemSectionRenderer,
              );
              break;
            case 49399797:
              r.appendContinuationItemsAction = q.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.appendContinuationItemsAction,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.itemSectionRenderer &&
          Z.internalBinaryWrite(
            e.itemSectionRenderer,
            t.tag(50195462, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.appendContinuationItemsAction &&
            q
              .internalBinaryWrite(
                e.appendContinuationItemsAction,
                t.tag(49399797, u.LengthDelimited).fork(),
                n,
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Gt = new Jt();
  var zt = class extends y {
      constructor() {
        super("youtube.response.shorts.Shorts", [
          { no: 2, name: "entries", kind: "message", repeat: 1, T: () => _t },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.entries = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 2:
              r.entries.push(_t.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.entries.length; r++)
          _t.internalBinaryWrite(
            e.entries[r],
            t.tag(2, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ur = new zt(),
    Ht = class extends y {
      constructor() {
        super("youtube.response.shorts.Entry", [
          { no: 1, name: "command", kind: "message", T: () => Xt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.command = Xt.internalBinaryRead(e, e.uint32(), n, r.command);
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.command &&
          Xt.internalBinaryWrite(
            e.command,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    _t = new Ht(),
    Qt = class extends y {
      constructor() {
        super("youtube.response.shorts.Command", [
          {
            no: 139608561,
            name: "reelWatchEndpoint",
            kind: "message",
            T: () => Yt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 139608561:
              r.reelWatchEndpoint = Yt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.reelWatchEndpoint,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.reelWatchEndpoint &&
          Yt.internalBinaryWrite(
            e.reelWatchEndpoint,
            t.tag(139608561, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Xt = new Qt(),
    en = class extends y {
      constructor() {
        super("youtube.response.shorts.ReelWatchEndpoint", [
          { no: 8, name: "overlay", kind: "message", T: () => qt },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 8:
              r.overlay = qt.internalBinaryRead(e, e.uint32(), n, r.overlay);
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.overlay &&
          qt
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
    Yt = new en(),
    tn = class extends y {
      constructor() {
        super("youtube.response.shorts.Overlay", [
          {
            no: 139970731,
            name: "reelPlayerOverlayRenderer",
            kind: "message",
            T: () => Zt,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 139970731:
              r.reelPlayerOverlayRenderer = Zt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.reelPlayerOverlayRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.reelPlayerOverlayRenderer &&
          Zt.internalBinaryWrite(
            e.reelPlayerOverlayRenderer,
            t.tag(139970731, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    qt = new tn(),
    nn = class extends y {
      constructor() {
        super("youtube.response.shorts.ReelPlayerOverlayRenderer", [
          { no: 12, name: "style", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.style = 0), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 12:
              r.style = e.int32();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    Zt = new nn();
  var sn = class extends y {
      constructor() {
        super("youtube.response.guide.Guide", [
          {
            no: 4,
            name: "labelItems",
            kind: "message",
            repeat: 1,
            T: () => te,
          },
          { no: 6, name: "iconItems", kind: "message", repeat: 1, T: () => te },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.labelItems = []),
          (t.iconItems = []),
          e !== void 0 && h(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 4:
              r.labelItems.push(te.internalBinaryRead(e, e.uint32(), n));
              break;
            case 6:
              r.iconItems.push(te.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.labelItems.length; r++)
          te.internalBinaryWrite(
            e.labelItems[r],
            t.tag(4, u.LengthDelimited).fork(),
            n,
          ).join();
        for (let r = 0; r < e.iconItems.length; r++)
          te.internalBinaryWrite(
            e.iconItems[r],
            t.tag(6, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Er = new sn(),
    on = class extends y {
      constructor() {
        super("youtube.response.guide.Item", [
          {
            no: 117866661,
            name: "guideSectionRenderer",
            kind: "message",
            T: () => rn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 117866661:
              r.guideSectionRenderer = rn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.guideSectionRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.guideSectionRenderer &&
          rn
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
    te = new on(),
    ln = class extends y {
      constructor() {
        super("youtube.response.guide.GuideSectionRenderer", [
          {
            no: 1,
            name: "rendererItems",
            kind: "message",
            repeat: 1,
            T: () => an,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.rendererItems = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.rendererItems.push(an.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.rendererItems.length; r++)
          an.internalBinaryWrite(
            e.rendererItems[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    rn = new ln(),
    cn = class extends y {
      constructor() {
        super("youtube.response.guide.RendererItem", [
          { no: 318370163, name: "iconRender", kind: "message", T: () => ne },
          { no: 117501096, name: "labelRender", kind: "message", T: () => ne },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 318370163:
              r.iconRender = ne.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.iconRender,
              );
              break;
            case 117501096:
              r.labelRender = ne.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.labelRender,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.iconRender &&
          ne
            .internalBinaryWrite(
              e.iconRender,
              t.tag(318370163, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.labelRender &&
            ne
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
    an = new cn(),
    dn = class extends y {
      constructor() {
        super("youtube.response.guide.guideEntryRenderer", [
          { no: 1, name: "browseId", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.browseId = ""), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.browseId = e.string();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    ne = new dn();
  var In = class extends y {
      constructor() {
        super("youtube.response.player.Player", [
          {
            no: 7,
            name: "adPlacements",
            kind: "message",
            repeat: 1,
            T: () => un,
          },
          { no: 2, name: "playabilityStatus", kind: "message", T: () => pn },
          { no: 9, name: "playbackTracking", kind: "message", T: () => gn },
          { no: 10, name: "captions", kind: "message", T: () => bn },
          { no: 68, name: "adSlots", kind: "message", repeat: 1, T: () => wn },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.adPlacements = []),
          (t.adSlots = []),
          e !== void 0 && h(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 7:
              r.adPlacements.push(un.internalBinaryRead(e, e.uint32(), n));
              break;
            case 2:
              r.playabilityStatus = pn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.playabilityStatus,
              );
              break;
            case 9:
              r.playbackTracking = gn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.playbackTracking,
              );
              break;
            case 10:
              r.captions = bn.internalBinaryRead(e, e.uint32(), n, r.captions);
              break;
            case 68:
              r.adSlots.push(wn.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.adPlacements.length; r++)
          un.internalBinaryWrite(
            e.adPlacements[r],
            t.tag(7, u.LengthDelimited).fork(),
            n,
          ).join();
        e.playabilityStatus &&
          pn
            .internalBinaryWrite(
              e.playabilityStatus,
              t.tag(2, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.playbackTracking &&
            gn
              .internalBinaryWrite(
                e.playbackTracking,
                t.tag(9, u.LengthDelimited).fork(),
                n,
              )
              .join(),
          e.captions &&
            bn
              .internalBinaryWrite(
                e.captions,
                t.tag(10, u.LengthDelimited).fork(),
                n,
              )
              .join();
        for (let r = 0; r < e.adSlots.length; r++)
          wn.internalBinaryWrite(
            e.adSlots[r],
            t.tag(68, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    re = new In(),
    Tn = class extends y {
      constructor() {
        super("youtube.response.player.AdPlacement", [
          {
            no: 84813246,
            name: "adPlacementRenderer",
            kind: "message",
            T: () => fn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 84813246:
              r.adPlacementRenderer = fn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.adPlacementRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.adPlacementRenderer &&
          fn
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
    un = new Tn(),
    Nn = class extends y {
      constructor() {
        super("youtube.response.player.AdPlacementRenderer", [
          { no: 4, name: "params", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.params = ""), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 4:
              r.params = e.string();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    fn = new Nn(),
    Wn = class extends y {
      constructor() {
        super("youtube.response.player.PlayabilityStatus", [
          { no: 21, name: "miniPlayer", kind: "message", T: () => hn },
          { no: 11, name: "backgroundPlayer", kind: "message", T: () => fe },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 21:
              r.miniPlayer = hn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.miniPlayer,
              );
              break;
            case 11:
              r.backgroundPlayer = fe.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.backgroundPlayer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.miniPlayer &&
          hn
            .internalBinaryWrite(
              e.miniPlayer,
              t.tag(21, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.backgroundPlayer &&
            fe
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
    pn = new Wn(),
    Sn = class extends y {
      constructor() {
        super("youtube.response.player.MiniPlayer", [
          {
            no: 151635310,
            name: "miniPlayerRender",
            kind: "message",
            T: () => yn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 151635310:
              r.miniPlayerRender = yn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.miniPlayerRender,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.miniPlayerRender &&
          yn
            .internalBinaryWrite(
              e.miniPlayerRender,
              t.tag(151635310, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    hn = new Sn(),
    xn = class extends y {
      constructor() {
        super("youtube.response.player.BackgroundPlayer", [
          {
            no: 64657230,
            name: "backgroundPlayerRender",
            kind: "message",
            T: () => mn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 64657230:
              r.backgroundPlayerRender = mn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.backgroundPlayerRender,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.backgroundPlayerRender &&
          mn
            .internalBinaryWrite(
              e.backgroundPlayerRender,
              t.tag(64657230, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    fe = new xn(),
    On = class extends y {
      constructor() {
        super("youtube.response.player.MiniPlayerRender", [
          { no: 1, name: "active", kind: "scalar", T: 8 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.active = !1), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.active = e.bool();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    yn = new On(),
    Pn = class extends y {
      constructor() {
        super("youtube.response.player.BackgroundPlayerRender", [
          { no: 1, name: "active", kind: "scalar", T: 8 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.active = !1), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.active = e.bool();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    mn = new Pn(),
    Cn = class extends y {
      constructor() {
        super("youtube.response.player.PlaybackTracking", [
          { no: 1, name: "videostatsPlaybackUrl", kind: "message", T: () => P },
          {
            no: 2,
            name: "videostatsDelayplayUrl",
            kind: "message",
            T: () => P,
          },
          {
            no: 3,
            name: "videostatsWatchtimeUrl",
            kind: "message",
            T: () => P,
          },
          { no: 4, name: "ptrackingUrl", kind: "message", T: () => P },
          { no: 5, name: "qoeUrl", kind: "message", T: () => P },
          { no: 13, name: "atrUrl", kind: "message", T: () => P },
          { no: 15, name: "videostatsEngageUrl", kind: "message", T: () => P },
          {
            no: 18,
            name: "pageadViewthroughconversion",
            kind: "message",
            T: () => P,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.videostatsPlaybackUrl = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videostatsPlaybackUrl,
              );
              break;
            case 2:
              r.videostatsDelayplayUrl = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videostatsDelayplayUrl,
              );
              break;
            case 3:
              r.videostatsWatchtimeUrl = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videostatsWatchtimeUrl,
              );
              break;
            case 4:
              r.ptrackingUrl = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.ptrackingUrl,
              );
              break;
            case 5:
              r.qoeUrl = P.internalBinaryRead(e, e.uint32(), n, r.qoeUrl);
              break;
            case 13:
              r.atrUrl = P.internalBinaryRead(e, e.uint32(), n, r.atrUrl);
              break;
            case 15:
              r.videostatsEngageUrl = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.videostatsEngageUrl,
              );
              break;
            case 18:
              r.pageadViewthroughconversion = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.pageadViewthroughconversion,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.videostatsPlaybackUrl &&
          P.internalBinaryWrite(
            e.videostatsPlaybackUrl,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.videostatsDelayplayUrl &&
            P.internalBinaryWrite(
              e.videostatsDelayplayUrl,
              t.tag(2, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.videostatsWatchtimeUrl &&
            P.internalBinaryWrite(
              e.videostatsWatchtimeUrl,
              t.tag(3, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.ptrackingUrl &&
            P.internalBinaryWrite(
              e.ptrackingUrl,
              t.tag(4, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.qoeUrl &&
            P.internalBinaryWrite(
              e.qoeUrl,
              t.tag(5, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.atrUrl &&
            P.internalBinaryWrite(
              e.atrUrl,
              t.tag(13, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.videostatsEngageUrl &&
            P.internalBinaryWrite(
              e.videostatsEngageUrl,
              t.tag(15, u.LengthDelimited).fork(),
              n,
            ).join(),
          e.pageadViewthroughconversion &&
            P.internalBinaryWrite(
              e.pageadViewthroughconversion,
              t.tag(18, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    gn = new Cn(),
    Un = class extends y {
      constructor() {
        super("youtube.response.player.Tracking", [
          { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.baseUrl = ""), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.baseUrl = e.string();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    P = new Un(),
    En = class extends y {
      constructor() {
        super("youtube.response.player.Captions", [
          {
            no: 51621377,
            name: "playerCaptionsTrackListRenderer",
            kind: "message",
            jsonName: "playerCaptionsTracklistRenderer",
            T: () => kn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 51621377:
              r.playerCaptionsTrackListRenderer = kn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.playerCaptionsTrackListRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.playerCaptionsTrackListRenderer &&
          kn
            .internalBinaryWrite(
              e.playerCaptionsTrackListRenderer,
              t.tag(51621377, u.LengthDelimited).fork(),
              n,
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    bn = new En(),
    Ln = class extends y {
      constructor() {
        super("youtube.response.player.PlayerCaptionsTrackListRenderer", [
          {
            no: 1,
            name: "captionTracks",
            kind: "message",
            repeat: 1,
            T: () => pe,
          },
          {
            no: 2,
            name: "audioTracks",
            kind: "message",
            repeat: 1,
            T: () => Rn,
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
          e !== void 0 && h(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.captionTracks.push(pe.internalBinaryRead(e, e.uint32(), n));
              break;
            case 2:
              r.audioTracks.push(Rn.internalBinaryRead(e, e.uint32(), n));
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
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.captionTracks.length; r++)
          pe.internalBinaryWrite(
            e.captionTracks[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        for (let r = 0; r < e.audioTracks.length; r++)
          Rn.internalBinaryWrite(
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
    kn = new Ln(),
    Fn = class extends y {
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
          e !== void 0 && h(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
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
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    pe = new Fn(),
    Dn = class extends y {
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
        return (t.captionTrackIndices = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 2:
              if (o === u.LengthDelimited)
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
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    Rn = new Dn(),
    $n = class extends y {
      constructor() {
        super("youtube.response.player.TranslationLanguage", [
          { no: 1, name: "languageCode", kind: "scalar", T: 9 },
          { no: 2, name: "languageName", kind: "message", T: () => W },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.languageCode = ""), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
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
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    he = new $n(),
    An = class extends y {
      constructor() {
        super("youtube.response.player.AdSlot", [
          { no: 424701016, name: "render", kind: "message", T: () => Bn },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 424701016:
              r.render = Bn.internalBinaryRead(e, e.uint32(), n, r.render);
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.render &&
          Bn.internalBinaryWrite(
            e.render,
            t.tag(424701016, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    wn = new An(),
    jn = class extends y {
      constructor() {
        super("youtube.response.player.AdSlot.Render", []);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        return i ?? this.create();
      }
      internalBinaryWrite(e, t, n) {
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Bn = new jn();
  var _n = class extends y {
      constructor() {
        super("youtube.response.setting.Setting", [
          {
            no: 6,
            name: "settingItems",
            kind: "message",
            repeat: 1,
            T: () => J,
          },
          {
            no: 7,
            name: "CollectionItems",
            kind: "message",
            jsonName: "CollectionItems",
            repeat: 1,
            T: () => J,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.settingItems = []),
          (t.collectionItems = []),
          e !== void 0 && h(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 6:
              r.settingItems.push(J.internalBinaryRead(e, e.uint32(), n));
              break;
            case 7:
              r.collectionItems.push(J.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.settingItems.length; r++)
          J.internalBinaryWrite(
            e.settingItems[r],
            t.tag(6, u.LengthDelimited).fork(),
            n,
          ).join();
        for (let r = 0; r < e.collectionItems.length; r++)
          J.internalBinaryWrite(
            e.collectionItems[r],
            t.tag(7, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Lr = new _n(),
    Xn = class extends y {
      constructor() {
        super("youtube.response.setting.SettingItem", [
          {
            no: 88478200,
            name: "backgroundPlayBackSettingRenderer",
            kind: "message",
            T: () => Mn,
          },
          {
            no: 66930374,
            name: "settingCategoryCollectionRenderer",
            kind: "message",
            T: () => Vn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 88478200:
              r.backgroundPlayBackSettingRenderer = Mn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.backgroundPlayBackSettingRenderer,
              );
              break;
            case 66930374:
              r.settingCategoryCollectionRenderer = Vn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.settingCategoryCollectionRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.backgroundPlayBackSettingRenderer &&
          Mn.internalBinaryWrite(
            e.backgroundPlayBackSettingRenderer,
            t.tag(88478200, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.settingCategoryCollectionRenderer &&
            Vn.internalBinaryWrite(
              e.settingCategoryCollectionRenderer,
              t.tag(66930374, u.LengthDelimited).fork(),
              n,
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    J = new Xn(),
    Yn = class extends y {
      constructor() {
        super("youtube.response.setting.BackgroundPlayBackSettingRenderer", [
          { no: 1, name: "name", kind: "message", T: () => W },
          { no: 2, name: "backgroundPlayback", kind: "scalar", T: 8 },
          { no: 3, name: "download", kind: "scalar", T: 8 },
          { no: 5, name: "trackingParams", kind: "scalar", T: 12 },
          { no: 9, name: "downloadQualitySelection", kind: "scalar", T: 8 },
          { no: 10, name: "smartDownload", kind: "scalar", T: 8 },
          { no: 14, name: "icon", kind: "message", T: () => ae },
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
          e !== void 0 && h(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
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
              r.icon = ae.internalBinaryRead(e, e.uint32(), n, r.icon);
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
            ae
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
    Mn = new Yn(),
    qn = class extends y {
      constructor() {
        super("youtube.response.setting.SettingCategoryCollectionRenderer", [
          { no: 2, name: "name", kind: "message", T: () => W },
          {
            no: 3,
            name: "subSettings",
            kind: "message",
            repeat: 1,
            T: () => ye,
          },
          { no: 4, name: "categoryId", kind: "scalar", T: 5 },
          { no: 5, name: "icon", kind: "message", T: () => ae },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (
          (t.subSettings = []),
          (t.categoryId = 0),
          e !== void 0 && h(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 2:
              r.name = W.internalBinaryRead(e, e.uint32(), n, r.name);
              break;
            case 3:
              r.subSettings.push(ye.internalBinaryRead(e, e.uint32(), n));
              break;
            case 4:
              r.categoryId = e.int32();
              break;
            case 5:
              r.icon = ae.internalBinaryRead(e, e.uint32(), n, r.icon);
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
          ye.internalBinaryWrite(
            e.subSettings[r],
            t.tag(3, u.LengthDelimited).fork(),
            n,
          ).join();
        e.categoryId !== 0 && t.tag(4, u.Varint).int32(e.categoryId),
          e.icon &&
            ae
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
    Vn = new qn(),
    Zn = class extends y {
      constructor() {
        super("youtube.response.setting.Icon", [
          { no: 1, name: "iconType", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.iconType = 0), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.iconType = e.int32();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    ae = new Zn(),
    zn = class extends y {
      constructor() {
        super("youtube.response.setting.SubSetting", [
          {
            no: 61331416,
            name: "settingBooleanRenderer",
            kind: "message",
            T: () => vn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 61331416:
              r.settingBooleanRenderer = vn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.settingBooleanRenderer,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.settingBooleanRenderer &&
          vn
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
    ye = new zn(),
    Hn = class extends y {
      constructor() {
        super("youtube.response.setting.SettingBooleanRenderer", [
          { no: 2, name: "title", kind: "message", T: () => W },
          { no: 3, name: "description", kind: "message", T: () => W },
          {
            no: 5,
            name: "enableServiceEndpoint",
            kind: "message",
            T: () => ie,
          },
          {
            no: 6,
            name: "disableServiceEndpoint",
            kind: "message",
            T: () => ie,
          },
          { no: 15, name: "itemId", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.itemId = 0), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
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
              r.enableServiceEndpoint = ie.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.enableServiceEndpoint,
              );
              break;
            case 6:
              r.disableServiceEndpoint = ie.internalBinaryRead(
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
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
            ie
              .internalBinaryWrite(
                e.enableServiceEndpoint,
                t.tag(5, u.LengthDelimited).fork(),
                n,
              )
              .join(),
          e.disableServiceEndpoint &&
            ie
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
    vn = new Hn(),
    Qn = class extends y {
      constructor() {
        super("youtube.response.setting.ServiceEndpoint", [
          {
            no: 81212182,
            name: "setClientSettingEndpoint",
            kind: "message",
            T: () => Gn,
          },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 81212182:
              r.setClientSettingEndpoint = Gn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.setClientSettingEndpoint,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.setClientSettingEndpoint &&
          Gn.internalBinaryWrite(
            e.setClientSettingEndpoint,
            t.tag(81212182, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ie = new Qn(),
    er = class extends y {
      constructor() {
        super("youtube.response.setting.SetClientSettingEndpoint", [
          { no: 1, name: "settingData", kind: "message", T: () => Kn },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.settingData = Kn.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.settingData,
              );
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.settingData &&
          Kn.internalBinaryWrite(
            e.settingData,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Gn = new er(),
    tr = class extends y {
      constructor() {
        super("youtube.response.setting.SettingData", [
          { no: 1, name: "clientSettingEnum", kind: "message", T: () => Jn },
          { no: 3, name: "boolValue", kind: "scalar", T: 8 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.boolValue = !1), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.clientSettingEnum = Jn.internalBinaryRead(
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
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.clientSettingEnum &&
          Jn.internalBinaryWrite(
            e.clientSettingEnum,
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join(),
          e.boolValue !== !1 && t.tag(3, u.Varint).bool(e.boolValue);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Kn = new tr(),
    nr = class extends y {
      constructor() {
        super("youtube.response.setting.ClientSettingEnum", [
          { no: 1, name: "item", kind: "scalar", T: 5 },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.item = 0), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.item = e.int32();
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
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
    Jn = new nr();
  var ir = class extends y {
      constructor() {
        super("youtube.response.watch.Watch", [
          { no: 1, name: "contents", kind: "message", repeat: 1, T: () => rr },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return (t.contents = []), e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 1:
              r.contents.push(rr.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.contents.length; r++)
          rr.internalBinaryWrite(
            e.contents[r],
            t.tag(1, u.LengthDelimited).fork(),
            n,
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Fr = new ir(),
    ar = class extends y {
      constructor() {
        super("youtube.response.watch.Content", [
          { no: 2, name: "player", kind: "message", T: () => re },
          { no: 3, name: "next", kind: "message", T: () => ee },
        ]);
      }
      create(e) {
        let t = globalThis.Object.create(this.messagePrototype);
        return e !== void 0 && h(this, t, e), t;
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          c = e.pos + t;
        for (; e.pos < c; ) {
          let [a, o] = e.tag();
          switch (a) {
            case 2:
              r.player = re.internalBinaryRead(e, e.uint32(), n, r.player);
              break;
            case 3:
              r.next = ee.internalBinaryRead(e, e.uint32(), n, r.next);
              break;
            default:
              let s = n.readUnknownField;
              if (s === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${o}) for ${this.typeName}`,
                );
              let d = e.skip(o);
              s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.player &&
          re
            .internalBinaryWrite(
              e.player,
              t.tag(2, u.LengthDelimited).fork(),
              n,
            )
            .join(),
          e.next &&
            ee
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
    rr = new ar();
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
  ce(v, "instances", {}),
    ce(v, "classNames", {
      QuanX: (e, t, n) => new Fe(e, t, n),
      Surge: (e, t, n) => new me(e, t, n),
      Loon: (e, t, n) => new sr(e, t, n),
    });
  var De = class extends v {
      getFn(e, t, n) {
        let i = De.clientAdapter[t] || t;
        return super.getFn(e, i, n);
      }
      setFn(e, t, n, i) {
        let r = De.clientAdapter[t] || t;
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
          let { method: i, body: r, bodyBytes: c, ...a } = e,
            o = c ?? r,
            s = o instanceof Uint8Array;
          $httpClient[i.toLowerCase()](
            { ...a, body: o, "binary-mode": s },
            (d, g, b) => {
              d && n(d);
              let m = s ? "bodyBytes" : "body";
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
    me = De;
  ce(me, "clientAdapter", { bodyBytes: "body" });
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
              for (let [c, a] of Object.entries(i))
                c === "sessionIndex"
                  ? (r.id = a)
                  : c === "bodyBytes"
                  ? (r.bodyBytes = V.transferBodyBytes(a, "Uint8Array"))
                  : c === "statusCode"
                  ? (r.status = a)
                  : (r[c] = a);
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
    Fe = V;
  ce(Fe, "clientAdapter", { id: "sessionIndex", status: "statusCode" });
  var sr = class extends me {
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
        lyricLang: "off",
        captionLang: "off",
        blockUpload: !0,
        blockImmersive: !0,
        blockShorts: !1,
        debug: !1,
      };
      return w.decodeParams(e);
    }
    fromBinary(e) {
      return e instanceof Uint8Array
        ? ((this.message = this.msgType.fromBinary(e)),
          w.debug(`bodyBytesSize: ${Math.floor(e.length / 1024)} kb`),
          this)
        : (w.log("YouTube can not get binaryBody"), w.exit(), this);
    }
    toBinary() {
      return this.msgType.toBinary(this.message);
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
          w.debug(`modifiedBodySize: ${Math.floor(e.length / 1024)} kb`),
          w.done({ bodyBytes: e });
      } else w.debug("use $.exit()"), w.exit();
    }
    iterate(e = {}, t, n) {
      let i = typeof e == "object" ? [e] : [];
      for (; i.length; ) {
        let r = i.pop(),
          c = Object.keys(r);
        for (let a of c) {
          if (a === t && n(r)) return;
          typeof r[a] == "object" && i.push(r[a]);
        }
      }
    }
  };
  function Xr(l) {
    let n = ".",
      i = "+-a^+6",
      r = "+-3^+b+-f",
      c,
      a,
      o;
    for (c = [], a = 0, o = 0; o < l.length; o++) {
      let s = l.charCodeAt(o);
      128 > s
        ? (c[a++] = s)
        : (2048 > s
            ? (c[a++] = (s >> 6) | 192)
            : ((s & 64512) == 55296 &&
              o + 1 < l.length &&
              (l.charCodeAt(o + 1) & 64512) == 56320
                ? ((s =
                    65536 + ((s & 1023) << 10) + (l.charCodeAt(++o) & 1023)),
                  (c[a++] = (s >> 18) | 240),
                  (c[a++] = ((s >> 12) & 63) | 128))
                : (c[a++] = (s >> 12) | 224),
              (c[a++] = ((s >> 6) & 63) | 128)),
          (c[a++] = (s & 63) | 128));
    }
    for (l = 406644, a = 0; a < c.length; a++) (l += c[a]), (l = Dr(l, i));
    return (
      (l = Dr(l, r)),
      (l ^= 3293161072),
      0 > l && (l = (l & 2147483647) + 2147483648),
      (l %= 1e6),
      l.toString() + n + (l ^ 406644)
    );
  }
  function Dr(l, e) {
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
  function $r(l, e) {
    return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${e}&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${Xr(
      l,
    )}&q=${encodeURIComponent(l)}`;
  }
  var oe = class extends G {
      constructor(e = Pr, t = "Browse") {
        super(e, t);
      }
      async pure() {
        return (
          this.iterate(this.message, "richItemContents", (e) => {
            let t = e.richItemContents;
            if (!Array.isArray(t)) return !1;
            for (let n = t.length - 1; n >= 0; n--)
              this.isAdvertise(t[n]) &&
                (e.richItemContents.splice(n, 1), (this.needProcess = !0));
          }),
          await this.translate(),
          this
        );
      }
      listUnknownFields(e) {
        return f.list(e);
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
          n ? this.blackNo.push(t) : this.whiteNo.push(t),
          (this.needSave = !0),
          n
        );
      }
      handleFieldEml(e) {
        let t = !1,
          n = "";
        return (
          this.iterate(e, "renderInfo", (i) => {
            if (
              ((n = i.renderInfo?.layoutRender?.eml?.split("|")?.[0] ?? ""),
              this.whiteEml.includes(n))
            )
              t = !1;
            else if (
              this.blackEml.includes(n) ||
              /shorts(?!_pivot_item)/.test(n)
            )
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
        for (let o = 0; o < r; o++) c[n[o]] = r - o;
        let a = 0;
        for (; a <= i - r; ) {
          if (
            t[a] === n[0] &&
            t[a + 1] === n[1] &&
            t[a + 2] === n[2] &&
            t[a + 3] === n[3] &&
            t[a + 4] === n[4] &&
            t[a + 5] === n[5]
          )
            return !0;
          a += c[t[a + r]] || r + 1;
        }
        return !1;
      }
      checkUnknownFiled(e) {
        return e
          ? this.listUnknownFields(e)?.some((n) => this.checkBufferIsAd(n)) ??
              !1
          : !1;
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
            (o) => (
              (n = o.timedLyricsContent),
              (t = o.timedLyricsContent.runs.map((s) => s.text).join(`
`)),
              (i = !0),
              !0
            ),
          ),
          i ||
            this.iterate(
              this.message,
              "description",
              (o) => (
                (n = o.description.runs[0]),
                (t = o.description.runs[0].text),
                (i = !0),
                !0
              ),
            ),
          !i)
        )
          return;
        let r = e.split("-")[0],
          c = $r(t, e),
          a = await w.fetch({ method: "GET", url: c });
        if (a.status === 200 && a.body) {
          let o = JSON.parse(a.body),
            s = " & Translated by Google",
            d = o[2].includes(r);
          n.text
            ? ((n.text = o[0].map((g) => (d ? g[0] : g[1] + g[0] || ""))
                .join(`\r
`)),
              this.iterate(
                this.message,
                "footer",
                (g) => ((g.footer.runs[0].text += s), !0),
              ))
            : n.runs.length <= o[0].length &&
              (n.runs.forEach((g, b) => {
                g.text = d
                  ? o[0][b][0]
                  : g.text +
                    `
${o[0][b][0]}`;
              }),
              (n.footerLabel += s)),
            (this.needProcess = !0);
        }
      }
    },
    ge = class extends oe {
      constructor(e = ee, t = "Next") {
        super(e, t);
      }
    },
    be = class extends G {
      constructor(e = re, t = "Player") {
        super(e, t);
      }
      async pure() {
        return (
          this.removeAd(),
          this.addPlayAbility(),
          this.addTranslateCaption(),
          (this.needProcess = !0),
          this
        );
      }
      removeAd() {
        this.message.adPlacements?.length &&
          (this.message.adPlacements.length = 0),
          this.message.adSlots?.length && (this.message.adSlots.length = 0),
          delete this.message?.playbackTracking?.pageadViewthroughconversion;
      }
      addPlayAbility() {
        let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
        typeof e == "object" && (e.active = !0),
          typeof this.message.playabilityStatus == "object" &&
            (this.message.playabilityStatus.backgroundPlayer = fe.create({
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
                a = -1,
                o = 0;
              for (let s = 0; s < n.length; s++) {
                let d = n[s],
                  g = c[d.languageCode];
                g && g > a && ((a = g), (o = s)), (d.isTranslatable = !0);
              }
              if (a !== 2) {
                let s = pe.create({
                  baseUrl: n[o].baseUrl + `&tlang=${e}`,
                  name: { runs: [{ text: `@Enhance (${e})` }] },
                  vssId: `.${e}`,
                  languageCode: e,
                });
                n.push(s);
              }
              if (Array.isArray(i)) {
                let s = a === 2 ? o : n.length - 1;
                for (let d of i)
                  d.captionTrackIndices?.includes(s) ||
                    d.captionTrackIndices.push(s),
                    (d.defaultCaptionTrackIndex = s),
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
              (t.translationLanguages = Object.entries(r).map(([c, a]) =>
                he.create({
                  languageCode: c,
                  languageName: { runs: [{ text: a }] },
                }),
              )),
              !0
            );
          });
      }
    },
    $e = class extends oe {
      constructor(e = Cr, t = "Search") {
        super(e, t);
      }
    },
    Ae = class extends G {
      constructor(e = Ur, t = "Shorts") {
        super(e, t);
      }
      async pure() {
        let e = this.message.entries?.length;
        if (e)
          for (let t = e - 1; t >= 0; t--)
            this.message.entries[t].command?.reelWatchEndpoint?.overlay ||
              (this.message.entries.splice(t, 1), (this.needProcess = !0));
        return this;
      }
    },
    je = class extends G {
      constructor(e = Er, t = "Guide") {
        super(e, t);
      }
      async pure() {
        let e = ["SPunlimited"];
        return (
          this.argument.blockUpload && e.push("FEuploads"),
          this.argument.blockImmersive && e.push("FEmusic_immersive"),
          this.argument.blockShorts && e.push("FEshorts"),
          this.iterate(this.message, "rendererItems", (t) => {
            for (let n = t.rendererItems.length - 1; n >= 0; n--) {
              let i =
                t.rendererItems[n]?.iconRender?.browseId ??
                t.rendererItems[n]?.labelRender?.browseId;
              i &&
                e.includes(i) &&
                (t.rendererItems.splice(n, 1), (this.needProcess = !0));
            }
          }),
          this
        );
      }
    },
    Me = class extends G {
      constructor(e = Lr, t = "Setting") {
        super(e, t);
      }
      async pure() {
        this.iterate(this.message.settingItems, "categoryId", (t) => {
          if (t.categoryId === 10135) {
            let n = ye.create({
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
        let e = J.create({
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
    Ve = class extends G {
      player;
      next;
      constructor(e = Fr, t = "Watch") {
        super(e, t), (this.player = new be()), (this.next = new ge());
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
  var Yr = new Map([
    ["browse", oe],
    ["next", ge],
    ["player", be],
    ["search", $e],
    ["reel_watch_sequence", Ae],
    ["guide", je],
    ["get_setting", Me],
    ["get_watch", Ve],
  ]);
  function or(l) {
    for (let [e, t] of Yr.entries()) if (l.includes(e)) return new t();
    return null;
  }
  async function qr() {
    let l = or(w.request.url);
    if (l) {
      let e = w.response.bodyBytes;
      w.timeStart("fromBinary"),
        l.fromBinary(e),
        w.timeEnd("fromBinary"),
        w.timeStart("modify"),
        await l.pure(),
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
  qr().catch((l) => {
    console.log(l.message), w.exit();
  });
})();
