export const details = [{
  title: '触发特效后生命值',
  params: { A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  params: { A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
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
  title: '[E]冲天转转搭乘伤害',
  params: { A: false,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['冲天转转搭乘伤害'] * calc(attr.def) / 100, 'e')
},{
  title: '[E]冲天转转独立伤害',
  dmgKey: 'AE',
  params: { A: false,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['冲天转转独立伤害'] * calc(attr.def) / 100, 'e')
},{
  title: '[Q]冲击大地伤害',
  params: { A: false,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.q['技能伤害'] * calc(attr.def) / 100, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,def,cpct,cdmg'

export const buffs = [{
  title: '坚岩之重：冲天转转造成的伤害提升[ePlus]点',
  data: {
    ePlus: ({ calc, attr }) => calc(attr.def) * 0.2
  }
},{
  title: '山的回声：岩元素伤害加成提升20%',
  data: {
    dmg: 20
  }
},{
  check: ({ params , cons }) => cons > 3,
  title: '4命：防御力提升20%',
  data: {
    defPct: 20
  }
}]
