module.exports = {
    "/": [
      "",
      "home",
      "introduction",
      "contribution",
      {
        title: "多平台插件",
        icon: "type",
		collapsable: false,
        prefix: "/多平台/",
        children: ["GriefDefender", "Chunky", "LibertyBans", "ServerUtils", "UltimateChat", "ajQueue", "Prism"],
      },
	  {
		title: "Bukkit 系",
		icon: "bitbucket",
		collapsable: false,
		prefix: "/Bukkit/",
		children: ["RoseStacker", "FastAsyncWorldEdit"]
	  },
    ],
  };