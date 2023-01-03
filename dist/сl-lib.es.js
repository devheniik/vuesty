import { defineComponent as i, openBlock as e, createElementBlock as c, normalizeClass as f, createBlock as l, resolveDynamicComponent as o, renderSlot as s } from "vue";
const u = ["disabled"], y = /* @__PURE__ */ i({
  __name: "CLButton",
  props: {
    leftIcon: {
      type: String,
      default: ""
    },
    variant: {
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
  setup(t) {
    return (n, a) => (e(), c("button", {
      disabled: t.disabled,
      class: f(["flex btn", `btn-${t.variant}`, { "btn-disabled": t.disabled }])
    }, [
      (e(), l(o(t.leftIcon), { class: "w-5 mr-2" })),
      s(n.$slots, "default"),
      (e(), l(o(t.rightIcon), { class: "w-5 ml-2" })),
      (e(), l(o(t.icon), { class: "h-9 w-5" }))
    ], 10, u));
  }
}), m = (t, n) => {
  const a = t.__vccOpts || t;
  for (const [r, d] of n)
    a[r] = d;
  return a;
}, b = {};
function g(t, n) {
  return e(), c("div", null, [
    s(t.$slots, "default")
  ]);
}
const h = /* @__PURE__ */ m(b, [["render", g]]);
export {
  h as CLAvatar,
  y as CLButton
};
