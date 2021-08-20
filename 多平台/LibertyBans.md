### 多平台插件推荐 ⑥ [LibertyBans] -- 高效简约的封禁插件。

**Bukkit & Bungee & Velocty | 开源 | 免费 | 开发者：A248**

* 支持版本：![Bukkit](https://img.shields.io/spiget/tested-versions/81063?label=Bukkit) Bungge Velocity(3.0及以上)>
* 社区评价：![Spiget 评分](https://img.shields.io/spiget/rating/81063?label=Spigot%20%E8%AF%84%E5%88%86&style=flat-square) ![GitHub stars](https://img.shields.io/github/stars/A248/LibertyBans?label=GitHub%20stars&style=flat-square)

编者：ahdg

#### 链接：

[Spigot](https://www.spigotmc.org/resources/libertybans.81063/) | [Github](https://github.com/A248/LibertyBans) | [CI](https://jenkins.hahota.net/job/LibertyBans/)

#### 简介：

&emsp;&emsp;LibertyBans 是一个追求简约与极致性能的封禁插件。它谨遵合理的异步架构，了解并避免了上下文切换的性能损耗，其 API 谨遵语义控制，且对多个平台具有良好的支持与结构设计(甚至支持 Geyser )。

&emsp;&emsp;在功能上，它在本体上保有应有的封禁插件功能，剔除了不必要的功能(例如对玩家做便签)，而扩展功能将在未来通过 API 实现。相较于 LiteBans，它在细节上的打磨上极为精进，比如使用 BINARY 列来存储 UUID 以减少空间，对 alt 用户进行自动扫描，支持基于 ip 的 封禁，踢出，禁言 等等。

&emsp;&emsp;它目前支持 HyperSQL(本地存储) MySQL/MariaDB，Sponge 支持也在计划之中，唯一的不足是目前只能进行全局封禁，而无法实行对单个服务器的封禁，尽管这个功能在设计数据结构时已被实现。