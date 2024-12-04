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
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]战技伤害提高',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.e['造成的伤害提高']),
      type: 'text'
    }
  }
}, {
  title: '[T]天赋暴击率提高',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.t['暴击率提高']),
      type: 'text'
    }
  }
},{
  title: '[T]天赋暴击率提高',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.t['暴击率提高'] * 3),
      type: 'text'
    }
  }
}, {
  title: '[Q]大招暴击伤害提高',
  dmgKey: 'AE',
  dmg: ({ attr, calc, talent }) => {
    return {
      avg: Format.percent(calc(attr.cdmg) * talent.q['爆伤提高·百分比'] / 100 + talent.q['爆伤提高·固定值']),
      type: 'text'
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '4命：回合开始时，恢复8点能量。',
  cons: 4,
  data: {
    beuncertain: 0
  }
}]
