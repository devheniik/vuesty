var s = Object.defineProperty
var a = (t, n) => s(t, 'name', { value: n, configurable: !0 })
import { _ as f, J as g, an as m } from './index-595e108c.js'
var u = f,
  C = g,
  x = m,
  h = RangeError,
  i = String.fromCharCode,
  v = String.fromCodePoint,
  l = C([].join),
  c = !!v && v.length != 1
u(
  { target: 'String', stat: !0, arity: 1, forced: c },
  {
    fromCodePoint: a(function (n) {
      for (var e = [], d = arguments.length, o = 0, r; d > o; ) {
        if (((r = +arguments[o++]), x(r, 1114111) !== r)) throw h(r + ' is not a valid code point')
        e[o] = r < 65536 ? i(r) : i(((r -= 65536) >> 10) + 55296, (r % 1024) + 56320)
      }
      return l(e, '')
    }, 'fromCodePoint'),
  }
)
//# sourceMappingURL=es.string.from-code-point-2b66a5b9.js.map
