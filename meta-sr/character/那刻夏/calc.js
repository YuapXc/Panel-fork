export const details = [{
  title: '[A]楚痛，酿造实识-伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E-单敌人]分形，驱逐虚知-单次伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'], 'e')
}, {
  title: '[E-单敌人]分形，驱逐虚知-全部伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + talent.e['目标伤害'] * 4, 'e')
}, {
  title: '[E-五敌人]分形，驱逐虚知-单次伤害',
  check: ({ cons }) => cons < 6,
  params: { W: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'], 'e')
}, {
  title: '[E-五敌人]分形，驱逐虚知-全部伤害',
  check: ({ cons }) => cons < 6,
  params: { W: true},
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + talent.e['目标伤害'] * 4, 'e')
}, {
  title: '[Q]生息破土，世界塑造-伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[2命]生息破土，世界塑造-额外伤害',
  check: ({ cons }) => cons > 1 && cons < 6,
  dmg: ({ attr }, { basic }) => basic(attr.atk * 50 / 100, 'q')
}, {
  title: '[2命]生息破土，世界塑造-额外总伤害',
  check: ({ cons }) => cons > 1 && cons < 6,
  dmg: ({ attr }, { basic }) => basic(attr.atk * 50 / 100 * 3, 'q')
}, {
  title: '[A]楚痛，酿造实识-伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'] * 1.3, 'a')
}, {
  title: '[E-单敌人]分形，驱逐虚知-单次伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] * 1.3, 'e')
}, {
  title: '[E-单敌人]分形，驱逐虚知-全部伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg((talent.e['目标伤害'] + talent.e['目标伤害'] * 4) * 1.3, 'e')
}, {
  title: '[E-五敌人]分形，驱逐虚知-单次伤害',
  check: ({ cons }) => cons > 5,
  params: { W: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] * 1.3, 'e')
}, {
  title: '[E-五敌人]分形，驱逐虚知-全部伤害',
  check: ({ cons }) => cons > 5,
  params: { W: true},
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg((talent.e['目标伤害'] + talent.e['目标伤害'] * 4) * 1.3, 'e')
}, {
  title: '[Q]生息破土，世界塑造-伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] * 1.3, 'q')
}, {
  title: '[2命]生息破土，世界塑造-额外伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ attr }, { basic }) => basic(attr.atk * 50 / 100 * 1.3, 'q')
}, {
  title: '[2命]生息破土，世界塑造-额外总伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ attr }, { basic }) => basic(attr.atk * 50 / 100 * 3 * 1.3, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ cons, params }) => params.W === true,
  title: '分形，驱逐虚知：战技造成的伤害提高100%',
  data: {
    dmg: 100
  }
},{
  title: '质性揭露：造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.t['伤害提高'] * 100
  }
},{
  title: '质性的嬗变：无视28%的防御力',
  data: {
    ignore: 28
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
  title: '2命：全属性抗性降低20%',
  cons: 2,
  data: {
    kx: 20
  }
}, {
  title: '4命：攻击力提高60%',
  cons: 4,
  data: {
    atkPct: 60
  }
}, {
  title: '6命：造成的伤害为原伤害的130%，我方全体造成的伤害提高50%。',
  cons: 6,
  data: {
    dmg: 50
  }
}]

export const createdBy = 'Ehya丶Calc'
