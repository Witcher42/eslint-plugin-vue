(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{441:function(e,t,n){"use strict";n.r(t);var r=n(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("Computed properties should be synchronous. Asynchronous actions inside them may not work as expected and can lead to an unexpected behaviour, that's why you should avoid them.\nIf you need async computed properties you might want to consider using additional plugin [vue-async-computed]")]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("This rule is aimed at preventing asynchronous methods from being called in computed properties.")]),e._v(" "),n("eslint-code-block",{attrs:{rules:{"vue/no-async-in-computed-properties":["error"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<script>\nexport default {\n  computed: {\n    /* ✓ GOOD */\n    foo () {\n      var bar = 0\n      try {\n        bar = bar / this.a\n      } catch (e) {\n        return 0\n      } finally {\n        return bar\n      }\n    },\n\n    /* ✗ BAD */\n    pro () {\n      return Promise.all([new Promise((resolve, reject) => {})])\n    },\n    foo1: async function () {\n      return await someFunc()\n    },\n    bar () {\n      return fetch(url).then(response => {})\n    },\n    tim () {\n      setTimeout(() => { }, 0)\n    },\n    inter () {\n      setInterval(() => { }, 0)\n    },\n    anim () {\n      requestAnimationFrame(() => {})\n    }\n  }\n}\n<\/script>\n")])])])]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("Nothing.")]),e._v(" "),e._m(5),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/foxbenjaminfox/vue-async-computed",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-async-computed"),n("OutboundLink")],1)])]),e._v(" "),e._m(6),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-async-in-computed-properties.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-async-in-computed-properties.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),n("OutboundLink")],1)])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vue-no-async-in-computed-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-no-async-in-computed-properties","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/no-async-in-computed-properties")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("disallow asynchronous actions in computed properties")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("⚙️ This rule is included in all of "),t("code",[this._v('"plugin:vue/essential"')]),this._v(", "),t("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),t("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" 📚 Further reading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);s.options.__file="no-async-in-computed-properties.md";t.default=s.exports}}]);