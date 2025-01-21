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
  title: '[A-1层]一百层的小火箭主目标伤害',
  params: { Q: false , T: false , TFCS: 1 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
}, {
  title: '[A-1层]一百层的小火箭相邻目标伤害',
  params: { Q: false , T: false , TFCS: 1 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['相邻目标伤害'] * attr.hp, 'a')
}, {
  title: '[Q-1层]猜猜这里住着谁伤害',
  params: { Q: false , T: false , TFCS: 1 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.hp, 'q')
}, {
  title: '[Q-1层]结界附加伤害',
  check: ({ cons }) => cons < 1,
  params: { Q: true , T: false , TFCS: 1 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['附加伤害'] * attr.hp * 1, 't')
}, {
  title: '[Q-1层]结界附加伤害',
  check: ({ cons }) => cons >= 1,
  params: { Q: true , T: false , TFCS: 1 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['附加伤害'] * attr.hp * 1.2, 't')
}, {
  title: '[T-1层]好忙好忙的缇宝伤害',
  params: { Q: false , T: true , TFCS: 1 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.t['技能伤害'] * attr.hp, 't')
}, {
  title: '[A-2层]一百层的小火箭主目标伤害',
  params: { Q: false , T: false , TFCS: 2 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
}, {
  title: '[A-2层]一百层的小火箭相邻目标伤害',
  params: { Q: false , T: false , TFCS: 2 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['相邻目标伤害'] * attr.hp, 'a')
}, {
  title: '[Q-2层]猜猜这里住着谁伤害',
  params: { Q: false , T: false , TFCS: 2 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.hp, 'q')
}, {
  title: '[Q-2层]结界附加伤害',
  check: ({ cons }) => cons < 1,
  params: { Q: true , T: false , TFCS: 2 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['附加伤害'] * attr.hp * 1, 't')
}, {
  title: '[Q-2层]结界附加伤害',
  check: ({ cons }) => cons >= 1,
  params: { Q: true , T: false , TFCS: 2 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['附加伤害'] * attr.hp * 1.2, 't')
}, {
  title: '[T-2层]好忙好忙的缇宝伤害',
  params: { Q: false , T: true , TFCS: 2 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.t['技能伤害'] * attr.hp, 't')
}, {
  title: '[A-3层]一百层的小火箭主目标伤害',
  params: { Q: false , T: false , TFCS: 3 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
}, {
  title: '[A-3层]一百层的小火箭相邻目标伤害',
  params: { Q: false , T: false , TFCS: 3 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['相邻目标伤害'] * attr.hp, 'a')
}, {
  title: '[Q-3层]猜猜这里住着谁伤害',
  params: { Q: false , T: false , TFCS: 3 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.hp, 'q')
}, {
  title: '[Q-3层]结界附加伤害',
  check: ({ cons }) => cons < 1,
  params: { Q: true , T: false , TFCS: 3 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['附加伤害'] * attr.hp * 1, 't')
}, {
  title: '[Q-3层]结界附加伤害',
  check: ({ cons }) => cons >= 1,
  params: { Q: true , T: false , TFCS: 3 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['附加伤害'] * attr.hp * 1.2, 't')
}, {
  title: '[T-3层]好忙好忙的缇宝伤害',
  dmgKey: 'AE',
  params: { Q: false , T: true , TFCS: 3 },
  dmg: ({ talent, attr }, { basic }) => basic(talent.t['技能伤害'] * attr.hp, 't')
}]

export const defParams = { TFCS: 1 }
export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '长翅膀的玻璃球：单人缇宝的生命上限提高[hpPlus]点',
  data: {
    hpPlus: ({ talent, attr, calc }) => calc(attr.hp) * 0.09
 }
}, {
  title: '城墙外的羊羔儿：缇宝造成的伤害提高[dmg]%',
  data: {
    dmg: ({ params }) => params.TFCS * 72
  }
}, {
  check: ({ params }) => params.T === true,
  title: '6魂：天赋的追加攻击造成的伤害提高729%。',
  cons: 6,
  data: {
    tDmg: 729
 }
}, {
  title: '4魂：造成伤害时无视目标18%的防御力。',
  cons: 4,
  data: {
    ignore: 18
 }
}, {
  title: '1魂：结界造成的附加伤害提高至原伤害的120%。',
  cons: 1,
  data: {
    dmg: 0
 }
}]

export const createdBy = 'Ehya丶Calc'
