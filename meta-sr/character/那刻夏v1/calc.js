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
  title: '[A]楚痛，酿造实识-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]分形，驱逐虚知-单次伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[E]分形，驱逐虚知-全部伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] + talent.e['随机伤害'] * 4, 'e')
}, {
  title: '[Q]生息破土，世界塑造-伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[2命]生息破土，世界塑造-额外伤害',
  check: ({ cons }) => cons > 1,
  dmg: ({ attr }, { basic }) => basic(attr.atk * 50 / 100, 'q')
}, {
  title: '[2命]生息破土，世界塑造-额外总伤害',
  check: ({ cons }) => cons > 1,
  dmg: ({ attr }, { basic }) => basic(attr.atk * 50 / 100 * 3, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '质性揭露：造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.t['伤害提高'] * 100
  }
},{
  title: '质性的嬗变：无视21%的防御力',
  data: {
    ignore: 21
  }
}, {
  title: '必要的留白：暴击伤害提高140%',
  data: {
    cdmg: 140
  }
}, {
  title: '1命：使目标防御力降低16%',
  cons: 1,
  data: {
    enemyDef: 16
  }
}, {
  title: '2命：速度提高12%',
  cons: 2,
  data: {
    speedPct: 12
  }
}, {
  title: '4命：攻击力提高120%',
  cons: 4,
  data: {
    atkPct: 120
  }
}, {
  title: '6命：造成的伤害提高15%',
  cons: 6,
  data: {
    dmg: 15
  }
}]

export const createdBy = 'Ehya丶Calc'
