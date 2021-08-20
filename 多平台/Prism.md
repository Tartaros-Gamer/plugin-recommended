### 多平台插件推荐 ⑦ [Prism] -- 远胜 CoreProtect 的记录回滚插件。

**Bukkit & Sponge | 开源 | 免费 | 内置汉化 | 有搬运 | 开发者: viveleroi(原作者)/AddstarMC(维护者)**

* 支持版本：![Bukkit](https://img.shields.io/spiget/tested-versions/75166?label=Bukkit) Bukkit 1.8-1.12.2(老版本，不受支持，建议用CoreProtect) Sponge 1.12.2(原作者版本)
* 社区评价：![Spiget 评分](https://img.shields.io/spiget/rating/75166?label=Spigot%20%E8%AF%84%E5%88%86&style=flat-square) ![GitHub stars](https://img.shields.io/github/stars/AddstarMC/Prism-Bukkit?label=GitHub%20stars&style=flat-square)

编者：ahdg

#### 链接

[Spigot](https://www.spigotmc.org/resources/prism.75166/) 后续维护者 Spigot 页面
<br>[Github](https://github.com/AddstarMC/Prism-Bukkit) 后续维护者 Github 仓库
<br>[Wiki](https://prism-bukkit.readthedocs.io/) 官方 Wiki
<br>[MCBBS](https://www.mcbbs.net/thread-1230654-1-1.html) 搬运贴。
<br>[Github](https://github.com/Rothes/Prism-Bukkit) 国内开发者的分支。
<br>[非官方Wiki](https://prism-cn.readthedocs.io/) 国内开发者汉化的文档。

---

#### 背景

&emsp;&emsp;在 2016 年, Prism-Bukkit 因为 [Sponge 重写](https://github.com/prism/Prism) 而被弃坑. 不久之后, the AddstarMC team 分叉了这个项目, 
用于他们自己的服务器并且从此之后一直在维护它。 伴随着 @viveleroi 的祝福, AddstarMC 现在已发布此插件到 SpigotMC 
并在 M.O.S.S. Discord 服务器 上提供支持。

&emsp;&emsp;Sponge 版的 Prism 功能更广泛，支持多种数据库，是目前 Sponge 为数不多的回滚插件。

*注：Sponge 版的 Prism 已停止开发，但仍然可用。*

#### 简介

&emsp;&emsp;Prism 作为一款记录回滚插件，从诞生之初便是开源的。相较于 CoreProtect，Prism 有着极为丰富的功能与自定义程度，它允许您完全汉化所有文本和指令，追踪多达 77 种行为，强大的架构允许您在回滚与搜索时添加极为复杂的条件，而 bloodshot 早期更是为其添加 MCPC+ 等 Hybrid 的兼容。
  
&emsp;&emsp;而在性能方面，其毫不逊色于 CoreProtect 等插件，在测试中，它达到了超过 一亿 检索的数据库记录。在 Sponge 版中，由于支持 MongoDB，这个
记录将不仅限于此。不同于 CoreProtect，它很少使用硬编码，一开始就开源注定着它的代码在社区中不断被捶打与磨砺，经过长久的迭代有着远超 CoreProtect
的稳定性与性能。

&emsp;&emsp;在用户友好性方面，Bukkit 版只支持 MySQL/MariaDB，而 Sponge 版则支持 SQLite/MySQL/MariaDB/MongoDB，有着更好的灵活性。由于功能的扩展，
它提供的搜索系统较为复杂，有着学习成本，但我相信它的功能值得你花上少量的时间。
