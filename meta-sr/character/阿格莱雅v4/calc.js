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
  title: '[A]孤锋千吻-主目标单次伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['阿格莱雅主目标伤害'], 'a')
},{
  title: '[忆灵]孤锋千吻-主目标单次伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['衣匠主目标伤害'], 't')
},{
  title: '[A]孤锋千吻-相邻目标单次伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['阿格莱雅相邻目标伤害'], 'a')
},{
  title: '[忆灵]孤锋千吻-相邻目标单次伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['衣匠相邻目标伤害'], 't')
},{
  title: '孤锋千吻-主目标总伤害',
  dmg: ({ talent }, { dynamic }) => {
    let t1dmg = dynamic(talent.a2['阿格莱雅主目标伤害'], 'a')
    let t2dmg = dynamic(talent.a2['衣匠主目标伤害'], 't')
    return {
      dmg: t1dmg.dmg + t2dmg.dmg,
      avg: t1dmg.avg + t2dmg.avg
    }
  }
},{
  title: '孤锋千吻-相邻目标总伤害',
  dmg: ({ talent }, { dynamic }) => {
    let t1dmg = dynamic(talent.a2['阿格莱雅相邻目标伤害'], 'a')
    let t2dmg = dynamic(talent.a2['衣匠相邻目标伤害'], 't')
    return {
      dmg: t1dmg.dmg + t2dmg.dmg,
      avg: t1dmg.avg + t2dmg.avg
    }
  }
},{
  title: '孤锋千吻-常规总伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, { dynamic }) => {
    let t1dmg = dynamic(talent.a2['阿格莱雅主目标伤害'], 'a')
    let t2dmg = dynamic(talent.a2['衣匠主目标伤害'], 't')
    let t3dmg = dynamic(talent.a2['阿格莱雅相邻目标伤害'], 'a')
    let t4dmg = dynamic(talent.a2['衣匠相邻目标伤害'], 't')
    return {
      dmg: t1dmg.dmg + t2dmg.dmg + (t3dmg.dmg * 2 + t4dmg.dmg * 2),
      avg: t1dmg.avg + t2dmg.avg + (t3dmg.avg * 2 + t4dmg.avg * 2)
    }
  }
},{
  title: '[E]回复衣匠生命值治疗量',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.e['回复生命值'])
},{
  title: '[忆灵]衣匠生命值',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.t['百分比生命值'] + talent.t['固定生命值'])
},{
  title: '[忆灵]刺纹之陷-主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'], 't')
},{
  title: '[忆灵]刺纹之陷-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'], 't')
},{
  title: '[T]金玫之指-附加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['附加伤害'], 't')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '至高之姿：速度提高[speedPct]%',
  check: ({ cons }) => cons < 2,
  data: {
    speedPct: ({ talent }) => talent.q['速度提高'] * 6 *100
  }
},{
  title: '至高之姿：速度提高[speedPct]%',
  check: ({ cons }) => cons > 1,
  data: {
    speedPct: ({ talent }) => talent.q['速度提高'] * 7 *100
  }
},{
  title: '短视之惩：攻击力提高[atkPlus]点',
  check: ({ cons }) => cons < 4,
  data: {
    atkPlus: ({ talent, attr }) => attr.speed * 7.2 + talent.e2['速度提高'] * 6 * 3.6 + 40 * 3.6
  }
},{
  title: '短视之惩：攻击力提高[atkPlus]点',
  check: ({ cons }) => cons > 3,
  data: {
    atkPlus: ({ talent, attr }) => attr.speed * 7.2 + talent.e2['速度提高'] * 7 * 3.6 + attr.speed * 0.35 * 3.6
  }
},{
  title: '2命：无视目标42%的防御力。',
  cons: 2,
  data: {
    ignore: 42
  }
},{
  title: '1命：敌人受到的伤害提高15%。',
  cons: 1,
  data: {
    dmg: 15
  }
},{
  title: '6命：雷属性抗性穿透提高20%',
  cons: 6,
  data: {
    kx: 20
  }
},{
  title: '6命：当前速度连携攻击提高10%',
  check: ({ calc, attr }) => calc(attr.speed) >= 160,
  cons: 6,
  data: {
    aDmg: 10
  }
},{
  title: '6命：当前速度连携攻击提高20%「10%+20%」',
  check: ({ calc, attr }) => calc(attr.speed) >= 240,
  cons: 6,
  data: {
    aDmg: 20
  }
},{
  title: '6命：当前速度连携攻击提高30%「10%+20%+30%」',
  check: ({ calc, attr }) => calc(attr.speed) >= 320,
  cons: 6,
  data: {
    aDmg: 30
  }
}]

export const createdBy = 'Ehya丶Calc'
