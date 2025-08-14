export const details = [{
  title: '触发特效后生命值',
  params: { Ygd: true },
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
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
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
  title: '触发特效后护盾强效',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.shield) * 1)
    }
  }
}, {
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[E后A1]幽焰显迹模式一段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['一段伤害'], 'a')
},{
  title: '[E后A2]幽焰显迹模式二段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['二段伤害'], 'a')
},{
  title: '[E后A3]幽焰显迹模式三段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['三段伤害'], 'a')
},{
  title: '[E后A4]幽焰显迹模式四段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['四段伤害'], 'a')
},{
  title: '[E后A5]幽焰显迹模式五段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['五段伤害'], 'a')
},{
  title: '[E后A+]幽焰显迹模式重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['重击伤害'], 'a2')
},{
  title: '[E]北国枪阵伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['北国枪阵伤害'], 'e')
},{
  title: '[Q]解放提灯伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能初始伤害'], 'q')
}, {
  title: `[Q]解放提灯月感电单段伤害`,
  params: { Ygd: true, Moonsign: 3 },
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['中间段月感电伤害'] / 100, '', 'lunarCharged')
}, {
  title: `[Q]解放提灯月感电最终段伤害`,
  dmgKey: 'AE',
  params: { Ygd: true, Moonsign: 3 },
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['最终段月感电伤害'] / 100, '', 'lunarCharged')
},{
  title: `[Q]雷霆交响月感电伤害`,
  params: { Ygd: true, Moonsign: 3 },
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['雷霆交响伤害'] / 100, '', 'lunarCharged')
},{
  title: `[Q]雷霆交响额外月感电伤害`,
  params: { Ygd: true, Moonsign: 3 },
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['雷霆交响额外伤害'] / 100, '', 'lunarCharged')
},{
  check: ({ cons }) => cons >= 2,
  title: `[2命]北国枪阵额外月感电伤害`,
  params: { Ygd: true },
  dmg: ({ calc, attr }, { basic }) => basic(calc(attr.atk) * 50 / 100, '', 'lunarCharged')
}, {
  title: '[反应]月感电伤害',
  params: { Ygd: true, Moonsign: 3 },
  dmg: ({}, { reaction }) => reaction('lunarCharged')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg'

export const buffs = [{
  check: ({ params }) => params.Ygd === true,
  title: '寒冬的交响：月感电反应造成的伤害提升[lunarCharged]%',
  data: {
    lunarCharged: 20
  }
},{
  title: '幽焰的呢喃：元素精通提升[mastery]',
  sort: 9,
  data: {
    mastery: ({ attr, calc }) => Math.min((calc(attr.atk) * 0.08), 160)
  }
}, {
  title: '2命：雷元素抗性降低[kx]%',
  cons: 2,
  data: {
    kx: 25
  }
},{
  title: '4命-幽焰的呢喃：元素精通额外提升[mastery]',
  cons: 4,
  data: {
    mastery: ({ attr, calc }) => Math.min((calc(attr.atk) * 0.02), 60)
  }
},{
  title: '4命：攻击力提升[atkPct]%',
  cons: 4,
  data: {
    atkPct: 20
  }
},{
  check: ({ params }) => params.Ygd === true,
  title: '月兆祝赐·旧世潜藏：触发感电反应时转为触发月感电反应,基础伤害提升[fypct]%',
  sort: 9,
  data: {
    fypct: ({ attr, calc }) => Math.min((calc(attr.atk) / 100 * 0.7), 14)
  }
}, {
  check: ({ params }) => params.Ygd === true,
  title: '6命：月感电反应伤害擢升[elevated]%',
  cons: 6,
  data: {
    elevated: 35
  }
}]