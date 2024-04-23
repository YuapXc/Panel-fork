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
  title: '[A]蹄铁裂颅伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[A]击锤连弩伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.a['击锤连弩'], 'a')
}, {
  title: '[T]轮中五豆击破伤害A(2韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (2 + 2) / 4 * (talent.t['击破伤害A'] + (talent.t['击破伤害C'] * zx))
    }
  }
}, {
  title: '[T]轮中五豆击破伤害A(10韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害A'] + (talent.t['击破伤害C'] * zx))
    }
  }
}, {
  title: '[T]轮中五豆击破伤害A(16韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (16 + 2) / 4 * (talent.t['击破伤害A'] + (talent.t['击破伤害C'] * zx))
    }
  }
},{
  title: '[T]轮中五豆击破伤害A(24韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (24 + 2) / 4 * (talent.t['击破伤害A'] + (talent.t['击破伤害C'] * zx))
    }
  }
},{
  title: '[T]轮中五豆击破伤害B(2韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (2 + 2) / 4 * (talent.t['击破伤害B'] + (talent.t['击破伤害C'] * zx))
    }
  }
}, {
  title: '[T]轮中五豆击破伤害B(10韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害B'] + (talent.t['击破伤害C'] * zx))
    }
  }
}, {
  title: '[T]轮中五豆击破伤害B(16韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (16 + 2) / 4 * (talent.t['击破伤害B'] + (talent.t['击破伤害C'] * zx))
    }
  }
},{
  title: '[T]轮中五豆击破伤害B(24韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (24 + 2) / 4 * (talent.t['击破伤害B'] + (talent.t['击破伤害C'] * zx))
    }
  }
},{
  title: '[T]轮中五豆击破伤害C(2韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (2 + 2) / 4 * (talent.t['击破伤害C'] + (talent.t['击破伤害C'] * zx))
    }
  }
}, {
  title: '[T]轮中五豆击破伤害C(10韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害C'] + (talent.t['击破伤害C'] * zx))
    }
  }
}, {
  title: '[T]轮中五豆击破伤害C(16韧性怪)',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (16 + 2) / 4 * (talent.t['击破伤害C'] + (talent.t['击破伤害C'] * zx))
    }
  }
},{
  title: '[T]轮中五豆击破伤害C(24韧性怪)',
  dmgKey: 'AE2',
  dmg: ({ talent, cons, params }, { reaction }) => {
    let zx = cons * 1 >= 6 ? 0.4 : 0
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (24 + 2) / 4 * (talent.t['击破伤害C'] + (talent.t['击破伤害C'] * zx))
    }
  }
},{
  title: '[6命-T]轮中五豆相邻目标击破伤害A(2韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (2 + 2) / 4 * (talent.t['击破伤害A'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
}, {
  title: '[6命-T]轮中五豆相邻目标击破伤害A(10韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害A'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
}, {
  title: '[6命-T]轮中五豆相邻目标击破伤害A(16韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (16 + 2) / 4 * (talent.t['击破伤害A'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
},{
  title: '[6命-T]轮中五豆相邻目标击破伤害A(24韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (24 + 2) / 4 * (talent.t['击破伤害A'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
},{
  title: '[6命-T]轮中五豆相邻目标击破伤害B(2韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (2 + 2) / 4 * (talent.t['击破伤害B'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
}, {
  title: '[6命-T]轮中五豆相邻目标击破伤害B(10韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害B'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
}, {
  title: '[6命-T]轮中五豆相邻目标击破伤害B(16韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (16 + 2) / 4 * (talent.t['击破伤害B'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
},{
  title: '[6命-T]轮中五豆相邻目标击破伤害B(24韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (24 + 2) / 4 * (talent.t['击破伤害B'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
},{
  title: '[6命-T]轮中五豆相邻目标击破伤害C(2韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (2 + 2) / 4 * (talent.t['击破伤害C'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
}, {
  title: '[6命-T]轮中五豆相邻目标击破伤害C(10韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (10 + 2) / 4 * (talent.t['击破伤害C'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
}, {
  title: '[6命-T]轮中五豆相邻目标击破伤害C(16韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (16 + 2) / 4 * (talent.t['击破伤害C'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
},{
  title: '[6命-T]轮中五豆相邻目标击破伤害C(24韧性怪)',
  cons: 6,
  dmg: ({ talent }, { reaction }) => {
    return {
      avg: reaction('physicalBreak').avg / 0.9 * (24 + 2) / 4 * (talent.t['击破伤害C'] + (talent.t['击破伤害C'] * 0.7))
    }
  }
},{
  title: '[Q]尘魔舞者的日落秀伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}]

export const defDmgKey = 'AE2'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '炽砾舞者的探戈：敌方受到的伤害提高[Dmg]%',
  data: {
    Dmg: ({ talent }) => talent.e['敌方受到的伤害提高'] * 100
  }
}, {
  title: '撬棍旅馆的浣熊6命：触发天赋造成击破伤害时，对目标额外造成等同于原伤害倍率40%的击破伤害',
  cons: 6,
  data: {
    dmg: 0
  }
},
{
  title: '冷肉名厨4命：敌方目标受到的伤害额外提高12%',
  cons: 4,
  data: {
    dmg: 12
  }
}, {
  title: '里程碑贩子2命：击破特攻提高30%',
  cons: 2,
  data: {
    stance: 30
  }
}, {
  title: '扬尘孤星1命：无视敌方目标16%的防御力。',
  cons: 1,
  data: {
    ignore: 16
  }
},
{
  title: '幽灵装填：使自身暴击率提高[cpct]%',
  data: {
    cpct: ({ attr, calc }) => Math.min( calc(attr.stance) * 0.1 , 30 )
  }
},
{
  title: '幽灵装填：使自身暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ attr, calc }) => Math.min( calc(attr.stance) * 0.5 , 150 )
  }
}]