export const details = [
  {
    title: "[A]小调，止水中回响·普攻伤害",
    dmg: ({ talent }, dmg) => dmg(talent.a["技能伤害"], "a")
  },
  {
    title: "[E]泛音，暗流后齐鸣·群体伤害",
    dmg: ({ talent }, dmg) => dmg(talent.e["技能伤害"], "e")
  },
  {
    title: "[Q]绝海回涛，噬魂舞曲·终结技伤害",
    dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
  },
  {
    title: "[Q]绝海回涛，噬魂舞曲·持续伤害",
    dmg: ({ talent }, dmg) => dmg(talent.q["持续伤害"], "dot")
  },
  {
    title: "[T]海妖在欢唱·持续伤害",
    dmg: ({ talent }, dmg) => dmg(talent.t["风/火/雷属性持续伤害"], "dot")
  }
]

export const defDmgIdx = 2
export const mainAttr = "atk,cpct,cdmg,dmg"

export const buffs = [
  {
    title: "[E]泛音，暗流后齐鸣：群体易伤[enemydmg]%",
    data: {
      enemydmg: ({ talent }) => (talent.e["伤害提高"]) * 100
    }
  },
  {
    title: "[Q]绝海回涛，噬魂舞曲：防御力降低[enemyDef]%",
    data: {
      enemyDef: ({ talent }) => (talent.q["防御力降低"]) * 100
    }
  },
  {
    title: "2命：结界期间全属性抗性降低[kx]%",
    cons: 2,
    data: {
      kx: 20
    }
  },
  {
    title: "行迹-珍珠的琴弦：效果命中高于60%时，每10%提升15%伤害，最多90%",
    data: {
        dmg: ({ attr }) => {
            const eff = attr.effPct
            if (eff <= 60) return 0
            const extra = Math.floor((eff - 60) / 10)
            return Math.min(extra * 15, 90)
        }
    }
}
]

export const createdBy = "YuapXc"