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
      avg: Math.min(calc(attr.heal) * 1)
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
  title: '[A]普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[A+]强化普攻伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'], 'a')
},{
  title: '[E]天火轰击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  check: ({ calc, attr }) => calc(attr.heal) < 360,
  title: '[E+]强化战技主目标伤害',
  dmgKey: 'AE',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['主目标伤害'] + 0.5 * calc(attr.heal), 'e')
},{
  check: ({ calc, attr }) => calc(attr.heal) < 360,
  title: '[E+]强化战技相邻目标伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['相邻目标伤害'] + 0.25 * calc(attr.heal), 'e')
},{
  check: ({ calc, attr }) => calc(attr.heal) > 359,
  title: '[E+]强化战技主目标伤害',
  dmgKey: 'AE',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['主目标伤害'] + 0.5 * 3.6, 'e')
},{
  check: ({ calc, attr }) => calc(attr.heal) > 359,
  title: '[E+]强化战技相邻目标伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['相邻目标伤害'] + 0.25 * 3.6, 'e')
},{
  title: '[流阮花藿-A]普攻伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[流阮花藿-A+]强化普攻伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'], 'a')
},{
  title: '[流阮花藿-E]天火轰击伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  check: ({ calc, attr }) => calc(attr.heal) < 360,
  title: '[流阮花藿-E+]强化战技主目标伤害',
  dmgKey: 'AE2',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['主目标伤害'] + 0.5 * calc(attr.heal), 'e')
},{
  check: ({ calc, attr }) => calc(attr.heal) < 360,
  title: '[流阮花藿-E+]强化战技相邻目标伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['相邻目标伤害'] + 0.25 * calc(attr.heal), 'e')
},{
  check: ({ calc, attr }) => calc(attr.heal) > 359,
  title: '[流阮花藿-E+]强化战技主目标伤害',
  dmgKey: 'AE2',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['主目标伤害'] + 0.5 * 3.6, 'e')
},{
  check: ({ calc, attr }) => calc(attr.heal) > 359,
  title: '[流阮花藿-E+]强化战技相邻目标伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['相邻目标伤害'] + 0.25 * 3.6, 'e')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '修复：#miao击破加成问题',
  data: {
    heal: ({ calc, attr }) => calc(attr.stance)
  }
},{
  check: ({ params,calc, attr }) => params.Q === true && calc(attr.heal) >= 250 && calc(attr.heal) < 360,
  title: '核心过载：无视目标30%防御力',
  data: {
    ignore: 30
  }
},{
  check: ({ params,calc, attr }) => params.Q === true && calc(attr.heal) >= 360,
  title: '核心过载：无视目标40%防御力',
  data: {
    ignore: 40
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 2500,
  title: '自我限制护甲：2500攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 2600,
  title: '自我限制护甲：2600攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 2700,
  title: '自我限制护甲：2700攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 2800,
  title: '自我限制护甲：2800攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 2900,
  title: '自我限制护甲：2900攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 3000,
  title: '自我限制护甲：3000攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 3100,
  title: '自我限制护甲：3100攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 3200,
  title: '自我限制护甲：3200攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 3300,
  title: '自我限制护甲：3300攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 3400,
  title: '自我限制护甲：3400攻击力,击破特攻提升[heal]%',
  data: {
    heal: 6
  }
},{
  check: ({ params,cons}) => params.Q === true && cons > 0,
  title: '1命：无视目标15%防御力',
  data: {
    ignore: 15
  }
},{
  check: ({ params,cons}) => params.Q === true && cons > 5,
  title: '6命：火属性抗性穿透提升12%',
  data: {
    kx: 12
  }
},{
  check: ({ params }) => params.team === true,
  title: '花火(272爆伤) 梦游鱼：暴击伤害提升[cdmg]%',
  data: {
    cdmg: 110.28
  }
}, {
  check: ({ params }) => params.team === true,
  title: '花火 一人千役&谜诡&叙述性诡计：三层全体造成的伤害提升[dmg]%',
  data: {
    dmg: 48
  }
}, {
  check: ({ params }) => params.team === true,
  title: '花火 游戏尘寰：全体暴击率提升10%',
  data: {
    cpct: 10
  }
}, {
  check: ({ params }) => params.team === true,
  title: '花火 游戏尘寰：全体暴击伤害伤害提升24%',
  data: {
    cdmg: 28
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '花火 龙骨套：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 10
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '花火 信使套：全队速度提升[speedPct]%',
  data: {
    speedPct: 12
  }
},{
  check: ({ cons, params }) => params.team === true,
  title: '藿藿 遣神役鬼：攻击力提升[atkPct]%',
  data: {
    atkPct: 40
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '藿藿 惊魂夜¹：攻击力提升[atkPct]%',
  data: {
    atkPct: 12
  }
},{
  check: ({ cons, params }) => params.team === true,
  title: '藿藿 龙骨套：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 10
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '阮•梅：我方全体击破特攻提高[heal]%',
  data: {
    heal: 20
  }
},{
  check: ({ cons, params }) => params.team === true,
  title: '阮•梅：我方全体造成伤害提高[dmg]%',
  data: {
    dmg: 68
  }
},{
  check: ({ cons, params }) => params.team === true,
  title: '阮•梅：我方全体全属性抗性穿透提高[kx]%',
  data: {
    kx: 25
  }
}]