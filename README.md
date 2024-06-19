# miao-plugin 扩展面板
![输入图片说明](https://gitee.com/euiko/Panel/raw/img/1000226779.jpg)
## 给miao-plugin在原有的基础上增加miao-plugin还未有的角色数据及伤害计算
## 以及在面板下方增加触发特效后属性的模板
## 还有一些小优化更方便用户使用！
#####  _当前版本:`sr2.4v1` `gs4.8v3`_ 
##### 由于我懒,所以sr角色的data中cv及所属是随便填的,问题不大的！
##### 主要还是个人用的,不建议刚用云崽的人使用

#  **使用说明** 
下载后将文件移动到下方位置并替换
```
plugins\miao-plugin\resources
```
![输入图片说明](https://gitee.com/euiko/Panel/raw/img/1000223543.jpg)
#  **随便找个地方输入** 
```
git clone https://gitee.com/euiko/Panel.git
```

#  **支持什么内容** 
`测试角色面板数据 √`
`测试圣遗物及专武数据 √`
`支持面板换xx专武 √`
`角色名字繁体字匹配 √`

# 若有问题或者建议就提交  `Issues` 
##### 注意:使用后之后`#喵喵更新`可能会报冲突
##### 删除冲突文件再`#喵喵更新`就可以了
##### 但是会导致无法使用本数据包的内容
##### 所以等喵喵更新了后你先按上面的先更新喵喵的
##### 再等我同步更新,到时候再直接替换就可以了！
##### 看主角面板直接把主角摆展示柜等5分钟左右再`*更新面板`就可以了

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