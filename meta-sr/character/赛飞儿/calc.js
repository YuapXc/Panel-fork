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
export const mainAttr = "atk,cpct,cdmg"

export const buffs = [
  {
    title: '天赋：追加攻击触发，造成等同于赛飞儿攻击力[tDmg]%的量子属性伤害',
    tree: 1,
    data: {
      tDmg: ({ talent }) => talent.t["技能伤害"] * 100
    }
  },
  {
    title: '战技：攻击力提高[_atkBuff]%',
    tree: 1,
    data: {
      _atkBuff: ({ talent }) => talent.e["攻击力提高"] * 100
    }
  },
  {
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
  },
  {
    title: '赛飞儿1命：目标受到的伤害提高[enemydmg]%',
    cons: 1,
    data: {
      enemydmg: 25
    }
  },
  {
    title: '赛飞儿2命：暴击伤害提高80%',
    cons: 2,
    data: {
      cdmg: 80
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
