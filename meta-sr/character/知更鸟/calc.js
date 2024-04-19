import { Format } from '#miao'

export const details = [{
  title: '触发特效后生命值',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { team: false,teamA: false,teamB: false,teamC: false,teamD: false },
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
  title: '[A]普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[A]E后普攻伤害',
  params: { team: false,teamA: true,teamB: false,teamC: false,teamD: false },
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[Q]附加伤害',
  params: { team: true,teamA: true,teamB: true,teamC: false,teamD: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['附加伤害'], 'q')
},{
  check: ({ cons }) => cons < 20,
  title: '[T]调性合颂·暴击伤害提高',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.t['暴击伤害提高']),
      type: 'text'
    }
  }
}, {
  check: ({ cons }) => cons > 100,
  title: '[T]调性合颂·暴击伤害提高',
  dmg: ({ talent }) => {
    return {
      avg: Math.floor( ( talent.t['暴击伤害提高'] + 20 ) * 100 ) / 100,
      type: 'text'
    }
  }
},{
  title: '[E]翎之咏叹调·伤害提高',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.e['伤害提高']),
      type: 'text'
    }
  }
}, {
  title: '[Q]千音迭奏,群星赋格·攻击力提高',
  dmgKey: 'AE',
  dmg: ({ talent, attr, calc }) => {
    return {
      avg: Math.floor( ( calc(attr.atk) * talent.q['基于攻击力'] + talent.q['额外值'] ) * 100 ) / 100,
      type: 'text'
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '4.11：Ehya',
  data: {
    dmg: 0
  }
},{
  title: '模进乐段：施放战技时额外恢复5点能量',
  data: {
    _energyevery: 5
  }
},
{
  check: ({ params }) => params.teamA === true,
  title: '翎之咏叹调：我方全体造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent }) => talent.e['伤害提高'] * 100
  }
},
{
  check: ({ params }) => params.team === true,
  title: '千音迭奏，群星赋格：我方全体攻击力提高[atkPlus]',
  data: {
    atkPlus: ({ talent, calc, attr }) => calc(attr.atk) * talent.q['基于攻击力'] + talent.q['额外值']
  }
},
{
  title: '1命：我方目标施放攻击时全属性抗性穿透提高24%',
  cons: 1,
  data: {
    dmg: 24
  }
},{
  title: '2命：处于【协奏】状态时，我方全体速度提高16.0%。，能量恢复效果额外提高1点',
  cons: 2,
  data: {
    speedPct: 16,
    recharge: 1
  }
},{
  title: '4命：效果抵抗提高[effDef]%',
  cons: 4,
  data: {
    effDef: 50
  }
},{
  title: '6命：物理属性附加伤害的暴击伤害额外提高450%',
  cons: 6,
  data: {
    effDef: 0
  }
},{
  check: ({ params,cons }) => params.teamB === true,
  title: '附加伤害：暴击率100%',
  data: {
    cpct: 100,
    cdmg: ({ talent, calc, attr }) => calc(attr.cdmg) - calc(attr.cdmg) * 2
  }
},{
  check: ({ params,cons }) => params.teamB === true && cons < 6,
  title: '附加伤害：暴击伤害[cdmg]%',
  data: {
    cdmg: 150
  }
},{
  check: ({ params,cons }) => params.teamB === true && cons > 5,
  title: '附加伤害：暴击伤害[cdmg]%',
  data: {
    cdmg: 600
  }
}]
