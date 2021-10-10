const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Minecraft 插件推荐",
  description: "Minecraft 插件推荐",
  base: "/plugin-recommended/",
  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    logo: "/logo.png",
    hostname: "https://tartaros.fun/plugin-recommended/",

    repo: "https://github.com/Tartaros-Gamer/plugin-recommended",

    nav: require("../nav"),

    sidebar: require("../sidebar"),

    blog: false,

    footer: {
      display: true,
      content: "MIT 许可 | Tartaros",
    },

    comment: false,

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
    },
  },
});
