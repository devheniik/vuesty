var m = Object.defineProperty
var n = (o, r) => m(o, 'name', { value: r, configurable: !0 })
import { D as u, a as v, b as S, A as x, P as y, S as C } from './iframe-ed67359a.js'
import {
  B as k,
  d as w,
  F as Y,
  y as G,
  i as W,
  E as $,
  C as q,
  j as z,
  l as K,
  G as L,
  I as U,
  H as J,
  M as Q,
  m as V,
  n as X,
  p as Z,
  r as rr,
  q as er,
  h as tr,
  w as ar,
  f as sr,
  x as or,
  c as nr,
  z as ir,
  e as cr,
  g as lr,
  k as dr,
  o as ur,
  u as pr,
  v as mr,
  t as vr,
  s as Sr,
} from './iframe-ed67359a.js'
import { r as p } from './index-595e108c.js'
import { j as a, a as f, F as I } from './jsx-runtime-ed18fbfb.js'
import { a0 as T, a1 as h } from './index-681e4b07-7d78b284.js'
import { a3 as yr, a2 as Cr, a4 as fr, a5 as Ir, a6 as Tr } from './index-681e4b07-7d78b284.js'
import './es.number.is-integer-e660a778.js'
var g = /\s*\/\s*/,
  P = n(function (r) {
    var e = r.title,
      t = e.trim().split(g)
    return (t && t[t.length - 1]) || e
  }, 'extractTitle'),
  b = n(function (r) {
    var e = r.children,
      t = p.useContext(u),
      s = e
    return s || (s = P(t)), s ? a(T, { className: 'sbdocs-title', children: s }) : null
  }, 'Title'),
  D = n(function (r) {
    var e = r.children,
      t = p.useContext(u),
      s = t.id,
      i = t.storyById,
      c = i(s),
      l = c.parameters,
      d = e
    return (
      d || (d = l == null ? void 0 : l.componentSubtitle),
      d ? a(h, { className: 'sbdocs-subtitle', children: d }) : null
    )
  }, 'Subtitle'),
  A = n(function (r) {
    var e = r.name,
      t = p.useContext(u),
      s = t.componentStories,
      i = s(),
      c
    return (
      i &&
        (c = e
          ? i.find(function (l) {
              return l.name === e
            })
          : i[0]),
      c ? a(v, { ...c, expanded: !1, withToolbar: !0 }) : null
    )
  }, 'Primary'),
  H = n(function () {
    return f(I, { children: [a(b, {}), a(D, {}), a(S, {}), a(A, {}), a(x, { story: y }), a(C, {})] })
  }, 'DocsPage'),
  N = n(function (r) {
    var e = r.children
    return a('div', { style: { fontFamily: 'sans-serif' }, children: e })
  }, 'Wrapper')
export {
  k as AddContext,
  w as Anchor,
  Y as AnchorMdx,
  x as ArgsTable,
  G as CURRENT_SELECTION,
  W as Canvas,
  $ as CodeOrSourceMdx,
  yr as ColorItem,
  Cr as ColorPalette,
  q as ComponentsTable,
  S as Description,
  z as DescriptionType,
  K as DocsContainer,
  u as DocsContext,
  H as DocsPage,
  v as DocsStory,
  L as HeaderMdx,
  U as HeadersMdx,
  J as Heading,
  fr as IconGallery,
  Ir as IconItem,
  Q as Meta,
  y as PRIMARY_STORY,
  V as Preview,
  A as Primary,
  X as Props,
  Z as Source,
  rr as SourceContainer,
  er as SourceContext,
  tr as SourceState,
  C as Stories,
  ar as Story,
  sr as StoryTable,
  or as Subheading,
  D as Subtitle,
  b as Title,
  Tr as Typeset,
  N as Wrapper,
  nr as anchorBlockIdFromId,
  ir as assertIsFn,
  cr as extractComponentArgTypes,
  P as extractTitle,
  lr as getComponent,
  dr as getDescriptionProps,
  ur as getSourceProps,
  pr as getStoryId,
  mr as getStoryProps,
  vr as lookupStoryId,
  Sr as storyBlockIdFromId,
}
//# sourceMappingURL=index-a784d7a7.js.map
