export const details = [{
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
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},
{
  title: '[A]摇摆的礼仪伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},
{
  title: '[E]中场馈赠的雨指定伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: '[E]中场馈赠的雨随机单段额外伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['随机伤害'], 'e')
},
{
  title: '[E]中场馈赠的雨随机总额外伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['随机伤害'] * 4, 'e')
},{
  title: '[Q]队友击破特攻提高',
  dmg: ({ attr, talent }) => {
    return {
      avg: Math.min(talent.q['击破特攻提高'] * 100)
    }
  }
},{
  title: '[4命]队友击破特攻提高',
  check: ({ cons}) => cons > 3,
  dmgKey: 'AE',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0.15 + 30)
    }
  }
},{
  title: '因为你非4命,所以不计入排行！',
  check: ({ cons}) => cons < 4,
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 0)
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,def,cpct,cdmg'

export const buffs = [{
  title: '2命：能量恢复效率提高25%',
  cons: 2,
  data: {
    recharge: 25
  }
},{title: '4.9最后修改：如有问题去gitee的Issues反馈！'}]