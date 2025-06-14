export const details = [{
  title: '[A]流影方晖伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.a['技能伤害'], 'a')
}, {
  title: '[E]无罅飞光伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['技能伤害'], 'e')
}, {
  title: '[E+]寒川映月伤害(三目标)',
  params: { strength: true },
  dmg: ({ talent, calc, attr, cons }, { basic }) => basic(talent.e2['目标伤害'] * calc(attr.hp) + talent.e2['相邻目标伤害'] * calc(attr.hp) + 0.8 * calc(attr.hp) * (cons > 0 ? 1 : 0), 'e')
}, {
  title: '[Q]昙华生灭，天河泻梦(三目标)',
  params: { q: true },
  dmg: ({ talent, calc, attr, cons }, { basic }) => basic(talent.q['目标伤害'] * calc(attr.hp) + 0.8 * calc(attr.hp) * (cons > 0 ? 1 : 0) + talent.q['相邻目标伤害'] * calc(attr.hp), 'q')
}, {
  title: '[Q+]昙华生灭转魄伤害(三目标)',
  params: { strength: true, q: true },
  dmg: ({ talent, calc, attr, cons }, { basic }) => basic(talent.q['目标伤害'] * calc(attr.hp) + 0.8 * calc(attr.hp) * (cons > 0 ? 1 : 0) + talent.q['相邻目标伤害'] * calc(attr.hp), 'q')
}]

export const defDmgIdx = 4
export const mainAttr = 'hp,cpct,cdmg'

export const buffs = [{
  title: '天赋-澹月转魄：转魄状态下，暴击率提高[cpct]%，五层月色暴击伤害提高[cdmg]%',
  check: ({ params }) => params.strength === true,
  data: {
    cpct: ({ talent }) => talent.t['暴击率提高'] * 100,
    cdmg: ({ talent }) => talent.t['暴击伤害提高'] * 100 * 5
  }
}, {
  title: '镜流1命：释放终结技或强化战技时，暴击伤害提高[cdmg]%，额外对主目标造成一次伤害',
  cons: 1,
  check: ({ params }) => params.strength === true || params.q === true,
  data: {
    cdmg: 36
  }
}, {
  title: '镜流2命：释放终结技后，下一次强化战技的伤害提高[eDmg]%',
  cons: 2,
  check: ({ params }) => params.strength === true,
  data: {
    eDmg: 80
  }
}, {
  title: '镜流4命：转魄状态下，五层月色额外提高暴击伤害[cdmg]%',
  cons: 4,
  check: ({ params }) => params.strength === true,
  data: {
    cdmg: 20 * 5
  }
}, {
  title: '镜流6命：转魄状态下，冰属性抗性穿透提高[kx]%',
  cons: 6,
  check: ({ params }) => params.strength === true,
  data: {
    kx: 30
  }
}, {
  title: '行迹-死境：转魄状态下，造成的终结技伤害提高[qDmg]%',
  tree: 1,
  check: ({ params }) => params.strength === true,
  data: {
    qDmg: 20
  }
}, {
  title: '行迹-霜魄：获得朔望时若已达到上限，镜流下一次攻击无视目标[ignore]%的防御力',
  tree: 3,
  check: ({ params }) => params.strength === true,
  data: {
    ignore: 25
  }
}]

export const createdBy = "YuapXc"