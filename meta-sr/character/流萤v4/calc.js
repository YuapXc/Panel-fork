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
  check: ({ calc, attr }) => calc(attr.stance) < 360,
  title: '[E+]强化战技主目标伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['主目标伤害'] + ((0.2 * calc(attr.stance)) * 0.1), 'e')
},{
  check: ({ calc, attr }) => calc(attr.stance) < 360,
  title: '[E+]强化战技相邻目标伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((0.1 * calc(attr.stance)) * 0.1), 'e')
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359,
  title: '[E+]强化战技主目标伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['主目标伤害'] + ((0.2 * 360) * 0.1), 'e')
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359,
  title: '[E+]强化战技相邻目标伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((0.1 * 360) * 0.1), 'e')
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 199 && calc(attr.stance) < 360 && cons < 6,
  title: '[强化技能主目标]超击破伤害',
  dmgKey: 'AEA',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 2+2*0.5)*0.35)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 199 && calc(attr.stance) < 360 && cons > 5,
  title: '[强化技能主目标]超击破伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 2+2*0.5+2*0.5)*0.5)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359 && cons < 6,
  title: '[强化技能主目标]超击破伤害',
  dmgKey: 'AEA',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 2+2*0.5)*0.5)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359 && cons > 5,
  title: '[强化技能主目标]超击破伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 2+2*0.5+2*0.5)*0.35)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 199 && calc(attr.stance) < 360 && cons < 6,
  title: '[强化技能相邻目标]超击破伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 1+1*0.5)*0.35)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 199 && calc(attr.stance) < 360 && cons > 5,
  title: '[强化技能相邻目标]超击破伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 1+1*0.5+1*0.5)*0.5)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359 && cons < 6,
  title: '[强化技能相邻目标]超击破伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 1+1*0.5)*0.5)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359 && cons > 5,
  title: '[强化技能相邻目标]超击破伤害',
  params: { team: false,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 1+1*0.5+1*0.5)*0.35)
    }
  }
},{
  title: '[流阮主藿]触发特效后击破特攻',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
},{
  title: '[流阮主藿-A]普攻伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[流阮主藿-A+]强化普攻伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'], 'a')
},{
  title: '[流阮主藿-E]天火轰击伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  check: ({ calc, attr }) => calc(attr.stance) < 360,
  title: '[流阮主藿-E+]强化战技主目标伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['主目标伤害'] + ((0.2 * calc(attr.stance)) * 0.1), 'e')
},{
  check: ({ calc, attr }) => calc(attr.stance) < 360,
  title: '[流阮主藿-E+]强化战技相邻目标伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((0.1 * calc(attr.stance)) * 0.1), 'e')
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359,
  title: '[流阮主藿-E+]强化战技主目标伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['主目标伤害'] + ((0.2 * 360) * 0.1), 'e')
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359,
  title: '[流阮主藿-E+]强化战技相邻目标伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ talent,calc, attr }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((0.1 * 360) * 0.1), 'e')
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 199 && calc(attr.stance) < 360 && cons < 6,
  title: '[流阮主藿-强化技能主目标]超击破伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 2+2*0.5+2*0.5)*0.35)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 199 && calc(attr.stance) < 360 && cons > 5,
  title: '[流阮主藿-强化技能主目标]超击破伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 2+2*0.5+2*0.5+2*0.5)*0.5)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359 && cons < 6,
  title: '[流阮主藿-强化技能主目标]超击破伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 2+2*0.5+2*0.5)*0.5)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359 && cons > 5,
  title: '[流阮主藿-强化技能主目标]超击破伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 2+2*0.5+2*0.5+2*0.5)*0.35)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 199 && calc(attr.stance) < 360 && cons < 6,
  title: '[流阮主藿-强化技能相邻目标]超击破伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 1+1*0.5+1*0.5)*0.35)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 199 && calc(attr.stance) < 360 && cons > 5,
  title: '[流阮主藿-强化技能相邻目标]超击破伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 1+1*0.5+1*0.5+1*0.5)*0.5)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359 && cons < 6,
  title: '[流阮主藿-强化技能相邻目标]超击破伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 1+1*0.5+1*0.5)*0.5)
    }
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.stance) > 359 && cons > 5,
  title: '[流阮主藿-强化技能相邻目标]超击破伤害',
  params: { team: true,teamA: false,teamB: false,teamC: false,Q: true },
  dmg: ({ trees }, { reaction }) => {
    return {
      avg: reaction('superBreak').avg * (( 1+1*0.5+1*0.5+1*0.5)*0.35)
    }
  }
}]

export const defDmgKey = 'AEA'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ params,cons}) => params.Q === true && cons > 0,
  title: '1命：无视目标15%防御力',
  data: {
    ignore: 15
  }
},{
  check: ({ params,cons}) => params.Q === true && cons > 5,
  title: '6命：火属性抗性穿透提升20%',
  data: {
    kx: 20
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '虚数主：击破特攻提升[stance]%',
  data: {
    stance: 100
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
  title: '阮•梅：我方全体击破特攻提高[stance]%',
  data: {
    stance: 20
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
},{
  check: ({ params,cons}) => params.Q === true && cons < 9,
  title: '5.21：Ehya',
  data: {
    ignore: 0
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) >= 1810,
  title: 'γ模组-过载核心：根据攻击力提升击破特攻提升[stance]%',
  data: {
    stance: ({ talent, calc, attr }) => ((calc(attr.atk) - 1800) * 0.01) * 8
  }
},
{
  check: ({ params }) => params.Q === true,
  title: '完全燃烧：造成的击破伤害提高[breakEnemydmg]%',
  data: {
    breakEnemydmg: ({ talent }) => talent.q['伤害提高'] * 100
  }
}]