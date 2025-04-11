export const details = [
  {
    title: "普攻伤害",
    dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
  },
  {
    title: "战技治疗(全体)",
    dmg: ({ talent, attr, calc }, { heal }) => heal((calc(attr.hp) * talent.e["回复·百分比"] + talent.e["回复·固定值"]) * 4)
  },
  {
    title: "战技治疗(伊卡)",
    dmg: ({ talent, attr, calc }, { heal }) => heal(calc(attr.hp) * talent.e["伊卡回复·百分比"] + talent.e["伊卡回复·固定值"])
  },
  {
    title: "终结技治疗(全体)",
    dmg: ({ talent, attr, calc }, { heal }) => heal((calc(attr.hp) * talent.q["回复·百分比"] + talent.q["回复·固定值"]) * 4)
  },
  {
    title: "终结技治疗(伊卡)",
    dmg: ({ talent, attr, calc }, { heal }) => heal(calc(attr.hp) * talent.q["伊卡回复·百分比"] + talent.q["伊卡回复·固定值"])
  },
  {
    title: "忆灵技最高回复治疗量",
    dmg: ({ talent, attr, calc }, { heal }) => heal(calc(attr.hp) * talent.mt["回复·百分比"] + talent.mt["回复·固定值"] * 4 * 2)
  },
  {
    title: "[阴云莞尔]战技治疗(全体)",
    params: { q: true },
    dmg: ({ talent, attr, calc }, { heal }) => heal((calc(attr.hp) * talent.e["回复·百分比"] + talent.e["回复·固定值"]) * 4)
  },
  {
    title: "[阴云莞尔]战技治疗(伊卡)",
    params: { q: true },
    dmg: ({ talent, attr, calc }, { heal }) => heal(calc(attr.hp) * talent.e["伊卡回复·百分比"] + talent.e["伊卡回复·固定值"])
  },
  {
    title: "[阴云莞尔]终结技治疗(全体)",
    params: { q: true },
    dmg: ({ talent, attr, calc }, { heal }) => heal((calc(attr.hp) * talent.q["回复·百分比"] + talent.q["回复·固定值"]) * 4)
  },
  {
    title: "[阴云莞尔]终结技治疗(伊卡)",
    params: { q: true },
    dmg: ({ talent, attr, calc }, { heal }) => heal(calc(attr.hp) * talent.q["伊卡回复·百分比"] + talent.q["伊卡回复·固定值"])
  },
  {
    title: "忆灵技最高回复治疗量",
    params: { q: true },
    dmg: ({ talent, attr, calc }, { heal }) => heal(calc(attr.hp) * talent.mt["回复·百分比"] + talent.mt["回复·固定值"] * 4 * 2)
  },
  {
    title: "终结技生命上限提升",
    dmg: ({ talent, attr, calc }, { heal }) => heal(calc(attr.hp) * talent.q["生命上限提高·百分比"] + talent.q["生命上限提高·固定值"])
  }
]

export const defDmgIdx = 3
export const defParams = { RainyState: true }
export const mainAttr = "hp,cpct,cdmg"

export const buffs = [
{
  title: '阴云莞尔：暴击率提高100%',
  data: {
    cpct: 100
  }
},{
  check: ({ cons, params }) =>  params.q === true,
  title: '阴云莞尔：治疗量提高25%',
  data: {
    heal: 25
  }
},{
  title: '雷雨轻柔：效果抵抗提高50%',
  data: {
    effDef: 50
  }
},{
  check: ({ cons, params, attr }) =>  cons < 4 && attr.speed >= 200 && attr.speed < 400,
  title: '暴风停歇：生命上限提高20%，治疗量提高[heal]%',
  data: {
    hpPct: 20,
    heal: ({ talent, attr }) => attr.speed - 200
  }
},{
  check: ({ cons, params, attr }) =>  cons > 3 && attr.speed >= 200 && attr.speed < 400,
  title: '暴风停歇：生命上限提高20%，治疗量提高[heal]%，暴击伤害额外提高[cdmg]%',
  data: {
    hpPct: 20,
    heal: ({ calc, attr }) => attr.speed - 200,
    cdmg: ({ calc, attr }) => (attr.speed - 200) * 2
  }
},{
  check: ({ cons, params, attr }) =>  cons < 4 && attr.speed >= 400,
  title: '暴风停歇：生命上限提高[hpPct]%，治疗量提高[heal]%',
  data: {
    hpPct: 20,
    heal: 200
  }
},{
  check: ({ cons, params, attr }) =>  cons > 3 && attr.speed >= 400,
  title: '暴风停歇：生命上限提高[hpPct]%，治疗量提高[heal]%，暴击伤害额外提高[cdmg]%',
  data: {
    hpPct: 20,
    heal: 200,
    cdmg: 400
  }
},{
    title: '天赋效果：伊卡伤害提高[damageBoost]%',
    tree: 1,
    data: {
      damageBoost: ({ talent }) => talent.t["伊卡伤害提高"] * 100
    }
},{
    title: '终结技效果：全体生命上限提升[teamHpBoost]%',
    tree: 1,
    data: {
      teamHpBoost: ({ talent }) => talent.q["生命上限提高·百分比"] * 100
    }
},{
    title: '命座1效果：生命上限提高额外[hpBoost]%',
    cons: 1,
    data: {
      hpBoost: 50
    }
},{
    title: '命座2效果：速度提高[speed]%',
    cons: 2,
    data: {
      speed: 30
    }
},{
    title: '4命：行迹暴风停歇的增益效果获得增强，每超过1点速度，风堇和伊卡的暴击伤害额外提高2%。',
    cons: 4,
    data: {
      cdmg: ({ talent, attr }) => (attr.speed - 200) * 0.02
    }
},{
    title: '命座6效果：全属性抗性穿透提高[kx]%',
    cons: 6,
    data: {
      kx: 24
    }
}]

export const createdBy = "YuapXc"