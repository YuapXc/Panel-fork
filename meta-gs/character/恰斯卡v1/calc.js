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
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[E]共鸣伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['共鸣伤害'], 'e')
},{
  title: '[A]多重瞄准点按伤害',
  params: { team: false,teamA: false,FS: false LM: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['多重瞄准点按伤害'], 'a')
}, {
  title: '[A+]追影弹伤害',
  params: { team: false,teamA: false,FS: false LM: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['追影弹伤害'], 'a2')
}, {
  title: '[A+]流焰追影弹伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['追影弹伤害'] * 1.5, 'a2')
}, {
  title: '[Q]裂风索魂弹伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['裂风索魂弹伤害'], 'q')
}, {
  title: '[Q]单枚索魂弹伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['索魂弹伤害'], 'q')
}, {
  title: '[Q]六枚索魂弹总伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['索魂弹伤害'] * 6, 'q')
}, {
  check: ({ cons }) => cons >= 2,
  title: '[2命]E后范围伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 400 / 100, 'e')
},{
  check: ({ cons }) => cons >= 4,
  title: '[4命]Q后范围伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 400 / 100, 'e')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '6命：多重瞄准的暴击伤害提升120%。',
  cons: 6,
  check: ({ params }) => params.LM === true,
  data: {
    cdmg: 120
  }
}]
