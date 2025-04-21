export const details = [
  {
    title: "普攻伤害",
    dmg: ({ talent }, dmg) => dmg(talent.a["技能伤害"], "a")
  },
  {
    title: "战技主目标伤害",
    dmg: ({ talent }, dmg) => dmg(talent.e["技能伤害"], "e")
  },
  {
    title: "战技相邻目标伤害",
    dmg: ({ talent }, dmg) => dmg(talent.e["相邻目标伤害"], "e")
  },
  {
    title: "终结技主目标伤害",
    dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
  },
  {
    title: "终结技相邻目标伤害",
    dmg: ({ talent }, dmg) => dmg(talent.q["相邻目标伤害"], "q")
  },
  {
    title: "天赋追加攻击伤害",
    dmg: ({ talent }, dmg) => dmg(talent.t["技能伤害"], "t")
  },
  {
    title: "秘技全体伤害",
    dmg: ({ talent }, dmg) => dmg(1.5, "z") // 固定150%攻击力
  }
]

export const defDmgIdx = 3
export const defParams = { oldCustomer: true }
export const mainAttr = 'atk,cpct,cdmg,speed'

export const buffs = [{
  title: '嘿，空手套白银：攻击力提高[atkPct]%',
  data: {
    atkPct: 30
  }
}, {
  title: '偷天换日：天赋的追加攻击造成的暴击伤害提高100%。赛飞儿在场时，敌方全体目标受到的伤害提高40%。',
  data: {
    tdmg: 100,
    enemydmg: 40
  }
}, {
  check: ({ cons, params, attr }) =>  attr.speed >= 140,
    title: '神行宝鞋：暴击率提高[cpct]%',
  data: {
    cpct: 25
  }
  },
  {
  check: ({ cons, params, attr }) =>  attr.speed >= 170,
    title: '神行宝鞋：暴击率再提高[cpct]%',
  data: {
    cpct: 25
  }
}, {
  title: '1命：攻击力提高80%',
  cons: 1,
  data: {
    atkPct: 80
  }
}, {
  title: '2命：受到的伤害提高30%',
  cons: 2,
  data: {
    enemydmg: 30
  }
  },
  {
    title: '赛飞儿6命：天赋追加攻击伤害提高[tdmg]%',
  cons: 6,
  data: {
    tdmg: 350
  }
  }
]

export const createdBy = 'YuapXc'
