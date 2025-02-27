export const details = [{
  title: '触发特效后生命值',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { L: false, X: false, team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '当前遗器套装',
  params: { L: false, X: false, team: false },
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[A]哀悼，死海之涟漪-伤害',
  params: { L: false, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
},{
  title: '[E]缄默，幽蝶之轻抚-主目标伤害',
  params: { L: false, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['主目标伤害'] * attr.hp, 'e')
},{
  title: '[E]缄默，幽蝶之轻抚-相邻目标伤害',
  params: { L: false, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['相邻目标伤害'] * attr.hp, 'e')
},{
  title: '[E+]骸爪，冥龙之环拥-首段攻击伤害',
  params: { L: true, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['首段攻击'] * attr.hp, 'e')
},{
  title: '[E+]骸爪，冥龙之环拥-尾段攻击伤害',
  params: { L: true, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['尾段攻击'] * attr.hp, 'e')
},{
  title: '[忆灵]死龙生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 0 + 320 * 100)
    }
  }
},{
  title: '[忆灵]擘裂冥茫的爪痕-伤害',
  params: { L: true, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['擘裂冥茫的爪痕'] * attr.hp, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-首段攻击伤害',
  params: { L: true, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['首段攻击'] * attr.hp, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-中段攻击伤害',
  params: { L: true, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['中段攻击'] * attr.hp, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  params: { L: true, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['尾段攻击'] * attr.hp, 'me')
},{
  title: '[忆灵]灼掠幽墟的晦翼-单次伤害',
  params: { L: true, X: false, team: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['灼掠幽墟的晦翼'] * attr.hp, 'me')
},{
  title: '[忆灵]灼掠幽墟的晦翼-全部伤害',
  params: { L: true, X: false, team: false },
  dmgKey: 'AE',
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['灼掠幽墟的晦翼'] * attr.hp * 6, 'me')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ cons, params }) =>  params.L === true,
  title: '遗世冥域：敌方全体全属性抗性降低[kx]%',
  data: {
    kx: ({ talent, attr }) => talent.q['全属性抗性降低'] * 100
  }
},{
  title: '新蕊3层：遐蝶与死龙造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.t['伤害提高'] * 100 * 3
  }
},{
  check: ({ cons, params }) =>  params.L === true,
  title: '震彻寂壤的怒啸：我方全体造成的伤害提高10%',
  data: {
    dmg: 10
  }
},{
  title: '收容的暗潮：速度提高40%',
  data: {
    speedPct: 40
  }
},{
  check: ({ cons, params }) =>  params.L === true,
  title: '1命：造成的伤害提高[dmg]%',
  cons: 1,
  data: {
    dmg: 30 * 6
  }
},{
  check: ({ cons, params }) =>  params.L === true,
  title: '2命：强化战技的伤害提高100%',
  cons: 2,
  data: {
    eDmg: 100
  }
},{
  title: '6命：量子属性抗性穿透提高20%',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
