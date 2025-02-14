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
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
}, {
  title: '[A+]雷霆飞缒伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['雷霆飞缒伤害'], 'a2')
}, {
  title: '[E]电掣雷驰伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[Q]力的三原理伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[A+]雷霆飞缒激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['雷霆飞缒伤害'], 'a2', 'aggravate')
}, {
  title: '[E]电掣雷驰激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'aggravate')
}, {
  title: '[Q]力的三原理激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', 'aggravate')
}, {
  title: '[Q]高位标示增加攻击力',
  dmgKey: 'AE',
  dmg: ({ attr, calc, talent}) => {
    return {
      avg: Math.min(talent.q['最大攻击力加成'],calc(attr.atk) * 0.27)
    }
  }
}, {
  title: '[Q]低位标示增加攻击力',
  dmg: ({ attr, calc, talent}) => {
    return {
      avg: Math.min(talent.q['最大攻击力加成'],calc(attr.atk) * 0.05 + 41)
    }
  }
}, {
  title: '[T]热身效应回复生命值',
  dmg: ({ attr, talent }, { heal }) => heal(attr.atk * 0.6)
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg'

export const buffs = [{
  title: '强化抗阻练习：攻击力提升20%',
  data: {
    atkPct: 20
  }
},{
  title: '2命：攻击力提升30%',
  cons: 2,
  data: {
    atkPct: 30
  }
},{
  title: '6命：造成的伤害提升25%',
  cons: 6,
  data: {
    dmg: 25
  }
}]
