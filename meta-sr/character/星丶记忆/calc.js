import { Format } from '#miao'

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
  title: '[A]包在我身上！-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[Q]一起上吧，迷迷！-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[E]回复迷迷生命值治疗量',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.e['回复生命值'])
},{
  title: '[忆灵]迷迷生命值',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.t['百分比生命值'] + talent.t['固定生命值'])
},{
  title: '[忆灵]坏人！麻烦！-单段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e2['单体伤害'], 't')
},{
  title: '[忆灵]坏人！麻烦！-全体伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体伤害'], 't')
}, {
  title: '[忆灵]暴击伤害提高',
  dmg: ({ attr, calc, talent }) => {
    return {
      avg: Format.percent(calc(attr.cdmg) * talent.e2['百分比暴伤'] / 100 + talent.e2['固定暴伤']),
      type: 'text'
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '伙伴！一起！：暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent, attr }) => talent.e2['百分比暴伤'] * attr.cdmg + talent.e2['固定暴伤']
  }
},{
  title: '1命：暴击率提高10%。',
  cons: 1,
  data: {
    cpct: 10
  }
},{
  title: '6命：终结技的暴击率固定为100%。',
  cons: 6,
  data: {
    qCpct: 100
  }
}]

export const createdBy = 'Ehya丶Calc'
