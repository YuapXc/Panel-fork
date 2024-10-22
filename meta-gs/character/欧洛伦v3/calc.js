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
},{
  title: '[E]暝色缒索伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['宿灵球伤害'], 'e')
},{
  title: '[E]暝色缒索激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['宿灵球伤害'], 'e', 'aggravate')
},{
  title: '[Q]黯声回响施放伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['秘仪伤害'], 'q')
},{
  title: '[Q]黯声回响施放激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['秘仪伤害'], 'q', 'aggravate')
},{
  title: '[Q]黯声回响音波碰撞伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['音波碰撞伤害'], 'q')
},{
  title: '[Q]黯声回响音波碰撞激化伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['音波碰撞伤害'], 'q', 'aggravate')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '2命：提升40%雷元素伤害',
  cons: 2,
  data: {
    dmg: 40
  }
},{
  title: '6命：提升30%攻击力',
  cons: 6,
  data: {
    atkPct: 30
  }
}]
