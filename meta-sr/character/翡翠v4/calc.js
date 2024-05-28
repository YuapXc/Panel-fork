export const details = [{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '[当品:0]触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '[当品:25]触发特效后攻击力',
  params: { T5: false,T10: false,T15: false,T20: false,T25: true,T30: false,T35: false,T40: false,T45: false,T50: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '[当品:50]触发特效后攻击力',
  params: { T5: false,T10: false,T15: false,T20: false,T25: false,T30: false,T35: false,T40: false,T45: false,T50: true},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
},{
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
},{
  title: '[A]普攻主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['主目标伤害'], 'a')
}, {
  title: '[A]普攻相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['相邻目标伤害'], 'a')
}, {
  title: '[E]收债人附加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[Q]堕此欲渊丶立此狱契伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[T-当品:5]追加攻击伤害',
  params: { T5: true,T10: false,T15: false,T20: false,T25: false,T30: false,T35: false,T40: false,T45: false,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:10]追加攻击伤害',
  params: { T5: false,T10: true,T15: false,T20: false,T25: false,T30: false,T35: false,T40: false,T45: false,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:15]追加攻击伤害',
  params: { T5: false,T10: false,T15: true,T20: false,T25: false,T30: false,T35: false,T40: false,T45: false,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:20]追加攻击伤害',
  params: { T5: false,T10: false,T15: false,T20: true,T25: false,T30: false,T35: false,T40: false,T45: false,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:25]追加攻击伤害',
  params: { T5: false,T10: false,T15: false,T20: false,T25: true,T35: false,T40: false,T45: false,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:30]追加攻击伤害',
  params: { T5: false,T10: false,T15: false,T20: false,T25: false,T30: true,T35: false,T40: false,T45: false,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:35]追加攻击伤害',
  params: { T5: false,T10: false,T15: false,T20: false,T25: false,T30: false,T35: true,T40: false,T45: false,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:40]追加攻击伤害',
  params: { T5: false,T10: false,T15: false,T20: false,T25: false,T30: false,T35: false,T40: true,T45: false,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:45]追加攻击伤害',
  params: { T5: false,T10: false,T15: false,T20: false,T25: false,T30: false,T35: false,T40: false,T45: true,T50: false},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}, {
  title: '[T-当品:50]追加攻击伤害',
  dmgKey: 'AE',
  params: { T5: false,T10: false,T15: false,T20: false,T25: false,T30: false,T35: false,T40: false,T45: false,T50: true},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.q['倍率提高'], 't')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ params,cons }) => params.T5 === true && cons < 2,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 5,
    atkPct: 2.5
  }
}, {
  check: ({ params,cons }) => params.T10 === true && cons < 2,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 10,
    atkPct: 5
  }
},{
  check: ({ params,cons }) => params.T5 === true && cons > 1,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 5,
    atkPct: 2.5,
    cpct: -18
  }
}, {
  check: ({ params,cons }) => params.T10 === true && cons > 1,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 10,
    atkPct: 5,
    cpct: -18
  }
},{
  check: ({ params }) => params.T15 === true,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 15,
    atkPct: 7.5
  }
},{
  check: ({ params }) => params.T20 === true,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 20,
    atkPct: 10
  }
},{
  check: ({ params }) => params.T25 === true,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 25,
    atkPct: 12.5
  }
},{
  check: ({ params }) => params.T30 === true,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 30,
    atkPct: 15
  }
},{
  check: ({ params }) => params.T35 === true,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 35,
    atkPct: 17.5
  }
},{
  check: ({ params }) => params.T40 === true,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 40,
    atkPct: 20
  }
},{
  check: ({ params }) => params.T45 === true,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 45,
    atkPct: 22.5
  }
},{
  check: ({ params }) => params.T50 === true,
  title: '当品：暴击伤害提升[cdmg]%,攻击提升[atkPct]%',
  data: {
    cdmg: ({ talent}) =>talent.t['暴击伤害提高'] * 50,
    atkPct: 25
  }
},{
  title: '1命：翡翠天赋的追加攻击伤害提高32%。',
  cons: 1,
  data: {
    tdmg: 32
  }
},{
  title: '2命：当品叠加至15层时，翡翠暴击率提高18%。',
  cons: 2,
  data: {
    cpct: 18
  }
}, {
  title: '4命：翡翠造成的伤害无视敌方目标12%的防御力。',
  cons: 4,
  data: {
    ignore: 12
  }
}, {
  title: '6命：量子属性抗性穿透提高20%。',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya'
