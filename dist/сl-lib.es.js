import { defineComponent as i, openBlock as t, createElementBlock as c, normalizeClass as f, createBlock as l, resolveDynamicComponent as a, renderSlot as s } from "vue";
const u = ["disabled"], h = /* @__PURE__ */ i({
  __name: "CLButton",
  props: {
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (n, o) => (t(), c("button", {
      disabled: e.disabled,
      class: f(["flex btn", { "btn-disabled": e.disabled }])
    }, [
      (t(), l(a(e.leftIcon), { class: "w-5 mr-2" })),
      s(n.$slots, "default"),
      (t(), l(a(e.rightIcon), { class: "w-5 ml-2" })),
      (t(), l(a(e.icon), { class: "h-9 w-5" }))
    ], 10, u));
  }
}), m = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [r, d] of n)
    o[r] = d;
  return o;
}, b = {};
function _(e, n) {
  return t(), c("div", null, [
    s(e.$slots, "default")
  ]);
}
const p = /* @__PURE__ */ m(b, [["render", _]]);
export {
  p as CLAvatar,
  h as CLButton
};
