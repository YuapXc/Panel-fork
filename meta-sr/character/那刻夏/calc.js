export const details = [{
  title: '[A]楚痛，酿造实识-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]分形，驱逐虚知-单次伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'], 'e')
}, {
  title: '[E]分形，驱逐虚知-全部伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + talent.e['目标伤害'] * 4, 'e')
}, {
  title: '[Q]生息破土，世界塑造-伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[2命]生息破土，世界塑造-额外伤害',
  check: ({ cons }) => cons > 1,
  dmg: ({ attr }, { basic }) => basic(attr.atk * 50 / 100, 'q')
}, {
  title: '[2命]生息破土，世界塑造-额外总伤害',
  check: ({ cons }) => cons > 1,
  dmg: ({ attr }, { basic }) => basic(attr.atk * 50 / 100 * 3, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '质性揭露：造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.t['伤害提高'] * 100
  }
},{
  title: '质性的嬗变：无视21%的防御力',
  data: {
    ignore: 21
  }
}, {
  title: '必要的留白：暴击伤害提高140%',
  data: {
    cdmg: 140
  }
}, {
  title: '1命：使目标防御力降低16%',
  cons: 1,
  data: {
    enemyDef: 16
  }
}, {
  title: '2命：速度提高12%',
  cons: 2,
  data: {
    speedPct: 12
  }
}, {
  title: '4命：攻击力提高120%',
  cons: 4,
  data: {
    atkPct: 120
  }
}, {
  title: '6命：造成的伤害提高15%',
  cons: 6,
  data: {
    dmg: 15
  }
}]

export const createdBy = 'Ehya丶Calc'
