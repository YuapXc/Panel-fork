export const details = [{
  title: '[A]|系统警告|',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]是否允许更改？',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[Q]|账号已封禁|',
  dmg: ({ talent, cons }, dmg) => {
    let addDmg = (cons * 1 >= 4) ? 1 : 0
    return dmg(talent.q['技能伤害'] + addDmg, 'q')
  }
}, {
  title: '量子击破纠缠伤害 (10韧性敌人)',
  dmg: ({ calc, attr }, { reaction }) => {
    return {
      avg: reaction('entanglement').avg * 5 * (10 + 2) / 4
    };
  }
}];

export const mainAttr = 'atk,cpct,cdmg,effPct'
export const defDmgIdx = 2

export const buffs = [{
  title: '银狼天赋：攻击力降低[enemyAtk]%，防御力降低[enemyDef]%，速度降低[enemySpeed]%',
  data: {
    enemyAtk: ({ talent }) => talent.t['攻击力降低'] * 100,
    enemyDef: ({ talent }) => talent.t['防御力降低'] * 100,
    enemySpeed: ({ talent }) => talent.t['速度降低'] * 100
  }
}, {
  title: '银狼战技：添加弱点降低对应属性抗性[kx]%，全属性抗性降低[allKx]%',
  data: {
    kx: 20,
    allKx: ({ talent }) => talent.e['全属性抗性降低'] * 100
  }
}, {
  title: '银狼终结技：降低敌方防御力[enemyDef]%',
  data: {
    enemyDef: ({ talent }) => talent.q['防御力降低'] * 100
  }
}, {
  title: '银狼4命：敌方有5个负面Buff附加100%攻击力的量子属性附加伤害',
  cons: 4,
  data: {}
}, {
  title: '银狼6命：敌方有5个负面Buff提高100%受到的伤害',
  cons: 6,
  data: {
    dmg: 100
  }
}, {
  check: ({ attr }) => attr.effPct >= 10 && attr.effPct < 20,
  title: '行迹-旁注：效果命中10%-20%，攻击力提高10%',
  data: {
    atkPct: 10
  }
}, {
  check: ({ attr }) => attr.effPct >= 20 && attr.effPct < 30,
  title: '行迹-旁注：效果命中20%-30%，攻击力提高20%',
  data: {
    atkPct: 20
  }
}, {
  check: ({ attr }) => attr.effPct >= 30 && attr.effPct < 40,
  title: '行迹-旁注：效果命中30%-40%，攻击力提高30%',
  data: {
    atkPct: 30
  }
}, {
  check: ({ attr }) => attr.effPct >= 40 && attr.effPct < 50,
  title: '行迹-旁注：效果命中40%-50%，攻击力提高40%',
  data: {
    atkPct: 40
  }
}, {
  check: ({ attr }) => attr.effPct >= 50,
  title: '行迹-旁注：效果命中50%以上，攻击力提高50%',
  data: {
    atkPct: 50
  }
}]

export const createdBy = 'YuapXc'