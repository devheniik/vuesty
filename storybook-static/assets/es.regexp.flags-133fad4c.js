var v = Object.defineProperty
var o = (r, e) => v(r, 'name', { value: e, configurable: !0 })
import { g as u, j as d, K as m, aT as y } from './index-595e108c.js'
import { ae as E } from './index-681e4b07-7d78b284.js'
var O = u,
  R = d,
  b = E,
  x = y,
  I = m,
  g = O.RegExp,
  c = g.prototype,
  P =
    R &&
    I(function () {
      var r = !0
      try {
        g('.', 'd')
      } catch {
        r = !1
      }
      var e = {},
        t = '',
        s = r ? 'dgimsy' : 'gimsy',
        n = o(function (l, p) {
          Object.defineProperty(e, l, {
            get: function () {
              return (t += p), !0
            },
          })
        }, 'addGetter'),
        a = { dotAll: 's', global: 'g', ignoreCase: 'i', multiline: 'm', sticky: 'y' }
      r && (a.hasIndices = 'd')
      for (var i in a) n(i, a[i])
      var f = Object.getOwnPropertyDescriptor(c, 'flags').get.call(e)
      return f !== s || t !== s
    })
P && b(c, 'flags', { configurable: !0, get: x })
//# sourceMappingURL=es.regexp.flags-133fad4c.js.map
