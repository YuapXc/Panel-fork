### 懒🐷YuapXc的自用库「 **自用！** 」

仅修改[euiko大佬的计算文件](https://gitee.com/euiko/Miao-Panel)以兼容fork版miao-plugin的角色数据，所需的角色数据可能不同于原库（可能报错NaN）

 **强烈推荐使用原库！！！** 


### 以下为原库的README

# miao-plugin 测试角色面板
## 导航站:https://gitee.com/euiko/Panel
## 原神已更新至5.8v5版本，星铁已更新至3.5v4版本
## 给miao-plugin在原有的基础上增加miao-plugin还未有的角色数据及伤害计算
## 以及在面板下方增加触发特效后属性的模板.
## 还有一些小优化更方便用户使用！
## 仅提供测试期间的数据，正式服上了请使用miao-plugin的角色数据及伤害计算.
## 星铁数据因为有违禁词(gitee的)所以麻烦手动解压再替换
# 示范指令
```
#伊涅芙天赋 #伊涅芙命座 *刻律德菈天赋 *刻律德菈命座
```
```
#重云面板换丝柯克换90级精2丝柯克专武换天赋101010换1命换深廊终曲
```
```
*银枝面板换白厄换80级精1白厄专武换妖精套换船长套换天赋6101010换满行迹
```
注：目前miao-plugin的gitee源因为不可阻挡的原因无法使用，需要切换到github源请在 Yunzai-Bot 根目录夹打开终端执行以下指令

```
git -C plugins/miao-plugin remote set-url origin https://github.com/yoimiya-kokomi/miao-plugin
```

如果网络较差可使用代理加速服务

```
git -C plugins/miao-plugin remote set-url origin https://ghfast.top/https://github.com/yoimiya-kokomi/miao-plugin
```

#  **使用说明** 
下载后将文件移动到下方位置并替换
```
plugins\miao-plugin\resources
```
![输入图片说明](https://gitee.com/euiko/Panel/raw/img/1000223543.jpg)
#  **随便找个地方输入** 
```
git clone https://gitee.com/euiko/Miao-Panel.git
```

#  **支持什么内容** 
`测试角色面板数据 √`
`测试圣遗物及专武数据 √`
`支持面板换xx专武 √`
`角色名字繁体字匹配 √`

# 若有问题或者建议就提交  `Issues` 
##### 注意:使用后之后`#喵喵更新`可能会报冲突
##### 删除冲突文件再`#喵喵更新`就可以了
##### 更新后再重新下载本扩展包即可！

# 使用前提
* [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) : 喵版Yunzai [Gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)
  / [Github](https://github.com/yoimiya-kokomi/Miao-Yunzai)
* [miao-plugin](https://github.com/yoimiya-kokomi/miao-plugin) : 喵喵插件 [Gitee](https://gitee.com/yoimiya-kokomi/miao-plugin)
  / [Github](https://github.com/yoimiya-kokomi/miao-plugin)

# 原神角色面板下方增加触发特效后属性的模板
### 文件路径
```
miao-plugin\resources\meta-gs\character\角色名字文件夹\calc.js
```
### 如果你用的梁氏插件,文件路径就是
```
liangshi-calc\damage\meta-gs\角色名字文件夹\calc.js
```
### 然后添加至任意角色伤害计算文件下方即可
![输入图片说明](https://gitee.com/euiko/Panel/raw/img/1000226776.jpg)
```
{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
    }
  }
}, {
  title: '触发特效后护盾强效',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.shield) * 1)
    }
  }
}, {
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
}
```
# 星铁角色面板下方增加触发特效后属性的模板
### 文件路径
```
miao-plugin\resources\meta-sr\character\角色名字文件夹\calc.js
```
### 如果你用的梁氏插件,文件路径就是
```
liangshi-calc\damage\meta-sr\角色名字文件夹\calc.js
```
### 然后添加至任意角色伤害计算文件下方即可
![输入图片说明](https://gitee.com/euiko/Panel/raw/img/1000226776.jpg)
```
{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
    }
  }
}, {
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
}
```
![输入图片说明](https://gitee.com/euiko/Panel/raw/img/1000226779.jpg)