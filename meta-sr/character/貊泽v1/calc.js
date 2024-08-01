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
  title: '[A]飞铙伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[A]Q后飞铙伤害',
  params: { Q : true},
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[E]迅羽掠袭伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]Q后迅羽掠袭伤害',
  params: { Q : true},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[T]伸天卑飞，折翅为芒伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
},{
  title: '[T]Q后伸天卑飞，折翅为芒伤害',
  dmgKey: 'AE',
  params: { Q : true},
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
},{
  title: '[T]伸天卑飞，折翅为芒附加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['附加伤害'], 't')
},{
  title: '[T]Q后伸天卑飞，折翅为芒附加伤害',
  params: { Q : true},
  dmg: ({ talent }, dmg) => dmg(talent.t['附加伤害'], 't')
},{
  title: '[Q]锋入幽渺，影出凌厉伤害',
  params: { Q : true},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ params }) => params.Q === true,
  title: 'Q状态：造成伤害提升[Dmg]%',
  data: {
    Dmg: ({ talent}) => talent.q['伤害提高'] *100
  }
},{
  title: '1命：【猎物】受到的追加攻击伤害提高25%。',
  cons: 1,
  data: {
    tdmg: 25
  }
}]
