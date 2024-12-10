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
  title: '[A]刺纹之蜜-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
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
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '飞驰之阳：造成的伤害提高30%',
  data: {
    dmg: 30
  }
},{
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
  check: ({ cons }) => cons < 2,
  data: {
    atkPlus: ({ talent, attr }) => attr.speed * 7.2 + talent.e2['速度提高'] * 6 * 3.6 + 40 * 3.6
  }
},{
  title: '短视之惩：攻击力提高[atkPlus]点',
  check: ({ cons }) => cons > 1,
  data: {
    atkPlus: ({ talent, attr }) => attr.speed * 7.2 + talent.e2['速度提高'] * 7 * 3.6 + 40 * 3.6
  }
},{
  title: '1命：无视目标50%的防御力。',
  cons: 1,
  data: {
    ignore: 50
  }
},{
  title: '4命：敌人受到的伤害提高8%。',
  cons: 4,
  data: {
    dmg: 8
  }
},{
  title: '6命：雷属性抗性穿透提高20%',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
