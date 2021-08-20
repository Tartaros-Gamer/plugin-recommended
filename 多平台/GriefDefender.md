### 多平台插件推荐 ① [GriefDefender] -- 支持混合端且功能丰富强大的领地插件。

**Bukkit & Sponge | 开源 | 付费获取支持 | 内置汉化 | 开发者: bloodshot**

* 支持版本：![最新](https://img.shields.io/spiget/tested-versions/68900?label=2.0%E4%BB%A5%E4%B8%8A&style=flat-square) Bukkit 1.8-1.16.5(2.0版本以前)  Sponge 1.12.2(全版本)
* 社区评价：![Spiget 评分](https://img.shields.io/spiget/rating/68900?label=Spigot%20%E8%AF%84%E5%88%86&style=flat-square)  | ![GitHub stars](https://img.shields.io/github/stars/bloodmc/GriefDefender?label=Github%20%E6%94%B6%E8%97%8F&style=flat-square) | 购买量: 700+

编者：ahdg

#### 链接

[Spigot](https://www.spigotmc.org/resources/68900/) 请在此处购买支持，代购的应当给你 Discord 链接。
<br>[Github](https://github.com/bloodmc/GriefDefender) 开源版本总会落后于最新版
<br>[Patreon](https://www.patreon.com/bloodmc) 如果你是群组，在这里购买高级支持。
<br>[Wiki](https://github.com/bloodmc/GriefDefender/wiki)
<br>[非官方Wiki](https://tartaros-gamer.github.io/griefDefenderDoc/) --- bloodshot 有意接管仓库但懒得写 Wiki

GD支持的插件详见：[GDHooks](https://github.com/bloodmc/GDHooks)

---

#### 背景

&emsp;&emsp;GriefDefender 前身是 Sponge 版的 GriefPrevention，作为 Sponge 为数不多可用的领地插件存在。而现在，bloodmc 将他带到了 Bukkit 平台，
我们很高兴能有幸目睹这一功能丰富的插件能在双平台上展现异样的光芒。

&emsp;&emsp;bloodmc是 MCPC/Cauldron 的开发者之一，其代码老练，功能与性能兼具，后又混迹于 Sponge 社区，
现在 GriefDefender 作为一个由混合端始祖之一开发的插件，自然也会支持混合端(Mohist/Arclight/LoliServer/CatServer)。

*注：由于 Mohist 破坏了 kyori-adapter 的实现，所以GD的文本无法被点击。LoliServer 由于继承了 Mohist 的部分代码，文本也无法点击。*

#### 简介

&emsp;&emsp;GriefDefender 作为领地插件，由于经历了 Sponge 时代的打磨，哪怕在 Bukkit/Hybrid 服务端上也有着对 Mod 一流的支持。
这种支持十分恐怖，GD 能帮助您溯源 Forge 所提供的假玩家后背的真玩家(没错，真的哈人，他会追踪生成假玩家的方块的放置者来计算权限)，
其强大的标签系统允许您在  mod 有 bug 的情况下使用GD提供的高级标签 进行修复(集成并继承了来自硬依赖 LuckPerms 的情境系统，
允许您在特定情境下读取 Mod 方块的 Meta 数据来进行权限操作)。
  
&emsp;&emsp;而在用户友好性方面，其毫不逊色 UltimateClaim CrashClaim Residence 等一众领地插件，
它完全依赖 聊天UI 进行操作，所有界面都已经被汉化(包括预置标签)。
<br>&emsp;&emsp;功能性上，它能比肩 FTBChunk 但在客制化方面又超越 FTBChunk，它的标签系统允许您用最基础的标签创建属于您自己的标签来客制化保护体验
(您能指定高级标签所影响的对象，比如说让某个物体与某个玩家没有碰撞箱)，
<br>&emsp;&emsp;在多样性方面，它支持领地的出租，出租后的领地租客挖掘领地内方块不会掉任何东西，而租期结束后领地又会自动复原。

&emsp;&emsp;在插件的支持上，GDHooks 涵盖了市面上大部分常见商店插件及在线地图插件(Dynmap，Pl3xmap，Bluemap)，
而对使用盔甲架的家具插件，我们更是直接挂钩家具库来识别家具类型，对 McMMO 的支持精确到了能否使用某个 Skill 。
<br>&emsp;&emsp;我这里无法再赘述太多，它还支持同客户端mod CUI的协同来显示领地，Mysql Mariadb PostgreSQL 都可以作为存储数据的方式，
唯一的不足就是 GD 必须依赖一个支持情境系统的插件来储存数据（到目前为止只支持 LuckPerms）。