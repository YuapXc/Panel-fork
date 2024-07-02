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
  title: '[E]燔燎急袭-主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
},{
  title: '[E]燔燎急袭-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
},{
  title: '[Q]鼎阵妙法,奇正相生伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  check: ({ params , cons }) => cons < 6,
  title: '[T]烬煨伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
},{
  check: ({ params , cons }) => cons > 5,
  title: '[T]烬煨伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] + talent.t['二命倍率提升'], 't')
}]

export const mainAttr = 'atk,cpct,cdmg'
export const defDmgKey = 'AE'

export const buffs = [{
  check: ({ params , cons }) => cons < 6,
  title: '5层烬煨：敌人受到的伤害提高[dmg]%',
  data: {
    dmg: ({ talent }) => talent.t['伤害提高'] * 100 + talent.t['额外提高'] * 5
  }
}, {
  check: ({ params , cons }) => cons > 5,
  title: '9层烬煨：敌人受到的伤害提高[dmg]%,全属性抗性降低[kx]%',
  data: {
    dmg: ({ talent }) => talent.t['伤害提高'] * 100 + talent.t['额外提高'] * 9,
    kx: 27
  }
},{
  check: ({ params }) => params.Q === true,
  title: '鼎阵妙法,奇正相生：敌人受到的终结技伤害提高[dmg]%',
  data: {
    qdmg: ({ talent }) => talent.q['伤害提高'] * 100
  }
}, {
  title: '1命：造成的伤害提高48%。',
  cons: 1,
  data: {
    dmg: 48
  }
},{
  check: ({ calc, attr,cons }) => calc(attr.effPct) >= 80,
  title: '举炊：攻击力提升[atkPct]%',
  data: {
    atkPct: ({ attr }) => Math.min(240, (attr.effPct - 80) * 0.15 *60)
  }
}]

export const createdBy = 'Ehya丶Calc'
