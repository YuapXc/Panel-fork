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
  title: '[A+]一扎眉攒,二扎心-单段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'], 'a')
},{
  title: '[A+]一扎眉攒,二扎心-三段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'] *3, 'a')
},{
  title: '[A+]一扎眉攒,二扎心-六段伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'] *6, 'a')
},{
  title: '[E]师父,请喝茶-附加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['附加伤害'], 'e')
},{
  title: '[Q]盖世女侠三月七伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  check: ({ cons }) => cons > 1,
  title: '[2命]追加攻击伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.atk) * 0.6, 't')
}]

export const mainAttr = 'atk,cpct,cdmg'
export const defDmgKey = 'AE'

export const buffs = [{
  title: '充能大于等于7点时：造成伤害提高[dmg]%',
  data: {
    dmg: ({ talent }) => talent.t['伤害提高'] * 100
  }
}, {
  title: '斡波：速度提高10%。',
  data: {
    speedPct: 10
  }
}, {
  title: '1命：强化普攻造成的暴击伤害提高36%。',
  cons: 1,
  data: {
    acdmg: 36
  }
}]

export const createdBy = 'Ehya丶Calc'
