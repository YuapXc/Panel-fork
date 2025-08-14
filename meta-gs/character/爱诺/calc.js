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
  title: '[E]妙思捕手一段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['一段伤害'], 'e')
}, {
  title: '[E]妙思捕手二段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['二段伤害'], 'e')
}, {
  title: '[Q]冷静一下鸭水弹伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['水弹伤害'], 'q')
}, {
  check: ({ cons }) => cons >= 2,
  title: '[2命]冷静一下鸭额外伤害',
  params: { Lunar: true },
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * 0.25 + calc(attr.mastery) * 1, 'q')
  }, {
  title: '[反应-满辉]月感电伤害',
  params: { Lunar: true, Moonsign: 3 },
  dmg: ({}, { reaction }) => reaction('lunarCharged')
  }, {
  title: '[反应-满辉]绽放伤害',
  params: { Moonsign: 3 },
  dmg: ({}, { reaction }) => reaction('bloom')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,mastery,cpct,cdmg'

export const buffs = [{
  title: '1命：元素精通提升80点',
  cons: 1,
  data: {
    mastery: 80
  }
},{
  title: '结构化功率提升：元素爆发伤害提升[qPlus]点',
  data: {
    qPlus: ({ calc, attr }) => calc(attr.mastery) * 50 / 100
  }
},{
    title: '爱诺6命：施放元素爆发后,当前场上角色触发的感电、绽放、月感电、月绽放造成的伤害提升[lunarBloom]%',
    cons: 6,
    data: {
      electroCharged: 35,
      bloom: 35,
      lunarCharged: 35,
      lunarBloom: 35
    }
  }
]
//部分伤害计算及Buff取自https://github.com/yoimiya-kokomi/miao-plugin