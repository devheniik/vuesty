var m = Object.defineProperty
var i = (e, r) => m(e, 'name', { value: r, configurable: !0 })
import {
  _ as u,
  a8 as b,
  G as h,
  aP as j,
  a1 as $,
  x as I,
  aQ as w,
  ad as D,
  Q as N,
  aR as S,
  aS as P,
  z as y,
  a5 as O,
  n as E,
  aH as U,
} from './index-595e108c.js'
import { $ as _ } from './index-681e4b07-7d78b284.js'
var L = u,
  M = h.findIndex,
  R = b,
  v = 'findIndex',
  p = !0
v in [] &&
  Array(1)[v](function () {
    p = !1
  })
L(
  { target: 'Array', proto: !0, forced: p },
  {
    findIndex: i(function (r) {
      return M(this, r, arguments.length > 1 ? arguments[1] : void 0)
    }, 'findIndex'),
  }
)
R(v)
var A = u,
  F = _,
  G = b
A({ target: 'Array', proto: !0 }, { fill: F })
G('fill')
var T =
    Object.is ||
    i(function (r, t) {
      return r === t ? r !== 0 || 1 / r === 1 / t : r != r && t != t
    }, 'is'),
  q = $,
  C = j,
  Q = I,
  V = w,
  W = D,
  c = T,
  d = N,
  z = S,
  H = P
C('search', function (e, r, t) {
  return [
    i(function (a) {
      var s = W(this),
        o = V(a) ? void 0 : z(a, e)
      return o ? q(o, a, s) : new RegExp(a)[e](d(s))
    }, 'search'),
    function (n) {
      var a = Q(this),
        s = d(n),
        o = t(r, a, s)
      if (o.done) return o.value
      var l = a.lastIndex
      c(l, 0) || (a.lastIndex = 0)
      var f = H(a, s)
      return c(a.lastIndex, l) || (a.lastIndex = l), f === null ? -1 : f.index
    },
  ]
})
var g = y,
  K = i(function (e) {
    return e !== void 0 && (g(e, 'value') || g(e, 'writable'))
  }, 'isDataDescriptor$1'),
  X = u,
  k = $,
  B = O,
  J = I,
  Y = K,
  Z = E,
  rr = U
function x(e, r) {
  var t = arguments.length < 3 ? e : arguments[2],
    n,
    a
  if (J(e) === t) return e[r]
  if (((n = Z.f(e, r)), n)) return Y(n) ? n.value : n.get === void 0 ? void 0 : k(n.get, t)
  if (B((a = rr(e)))) return x(a, r, t)
}
i(x, 'get')
X({ target: 'Reflect', stat: !0 }, { get: x })
var er = O,
  ar = Math.floor,
  tr =
    Number.isInteger ||
    i(function (r) {
      return !er(r) && isFinite(r) && ar(r) === r
    }, 'isInteger'),
  nr = u,
  ir = tr
nr({ target: 'Number', stat: !0 }, { isInteger: ir })
export { tr as i }
//# sourceMappingURL=es.number.is-integer-e660a778.js.map
