##### 多平台插件推荐 ③ [ServerUtils] -- Plugman 理念的继承与延展。

**Bukkit & Bungee & Velocity | 开源 | 免费 | 开发者：FrankHeijden**

> 支持版本：Bukkit (1.8-1.17.X) Bungee  Velocity (3.0及以上)
>
> 社区评价：Spigot 21个评论 5星
>

编者：ahdg

###### 链接：

[Spigot]([https://www.spigotmc.org/resources/79599/](https://www.spigotmc.org/resources/79599/)) | [Github]([https://github.com/FrankHeijden/ServerUtils](https://github.com/FrankHeijden/ServerUtils))

###### 简介：

      这是一个在运行时加载/卸载/监听您插件文件夹的插件，相较于我们熟知的 Plugman，它支持更多的平台，具有诸如热重载 Bukkit.yml command.yml 等功能，它还为 Bungee 系添加了一个简单又实用的插件列表。

      更强大的是，它的设计决定着它对插件的管理更为彻底，当您重载那些引入新合成的插件时，SU 能帮助您同时甄别配方表的归属并重新应用它们(仅在 1.12 以上生效)，而监听功能允许您时时监听插件文件夹变动，当您往插件文件夹添加 Jar 文件时，它会根据您的设置来决定是否自动加载它们，或者使用带有 TAB 补全的命令来手动加载(支持文件名补全哦)。

      它也能重新加载自己，如果您想那么做的话。