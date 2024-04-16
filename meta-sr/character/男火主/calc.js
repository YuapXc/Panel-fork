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
  title: '[A]普通攻击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},
{
  title: '[A]灼热意志普攻主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['单体伤害'], 'a')
},
{
  title: '[A]灼热意志普攻相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['相邻伤害'], 'a')
},
{
  title: '[Q]陷阵无回的炎枪伤害',
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['攻击力百分比'] * attr.atk + talent.q['防御力百分比'] * attr.def , 'q')
},
{
  title: '[T]护盾量',
  dmgKey: 'AE',
  dmg: ({ attr, calc, talent }, { shield }) => shield(calc(attr.def) * talent.t['防御力百分比'] + talent.t['额外值'])
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,def,cpct,cdmg'

export const buffs = [{
  title: '天赋·行胜思：攻击力提高15%',
  data: {
    atkPct: 15
  }
},{
  title: '6命：防御力提高30%',
  cons: 6,
  data: {
    defPct: 30
  }
},{title: '3.28最后修改：如有问题可联系3591754738反馈！'}]