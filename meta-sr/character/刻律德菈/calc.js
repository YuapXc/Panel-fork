export const details = [
  {
    title: "[A+T]易位，兵贵神速·普攻伤害",
    dmg: ({ talent }, dmg) => dmg(talent.a["技能伤害"], "a")
  },
  {
    title: "[A+TP]易位，兵贵神速·普攻伤害",
    check: ({ cons }) => cons > 0,
    params: { JW : true },
    dmg: ({ talent }, dmg) => dmg(talent.a["技能伤害"], "a")
  },
  {
    title: "[T]荣光属于凯撒·军功攻击力加成",
    dmg: ({ talent, attr }) => {
        return {
            avg: (talent.t['攻击力提高']) * attr.atk
        }
    }
  },
  {
    title: "[Q+T]世事如棋，四步堪杀·终结技伤害",
    dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
  },
  {
    title: "[Q+TP]世事如棋，四步堪杀·终结技伤害",
    check: ({ cons }) => cons > 0,
    params: { JW : true },
    dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
  }
]

export const defDmgIdx = 3
export const mainAttr = "atk,cpct,cdmg,dmg"

export const buffs = [
  {
    title: "[天赋]军功：持有军功角色攻击力提高[atkPlus]",
    data: {
      atkPlus: ({ attr, talent, calc }) => calc(attr.atk) * (talent.t["攻击力提高"]) / 100
    }
  },
  {
    title: "[天赋+]爵位：战技伤害暴击伤害提高[eCdmg]%",
    check: ({ params }) => params.JW === true,
    data: {
      eCdmg: ({ talent }) => (talent.e["暴伤提高"]) * 100
    }
  },

  {
    title: "[秘技]来者：攻击力大于2000时，每超过100点攻击力可使自身暴击伤害提高18%，最多提高360%",
    tree: 1,
    data: {
      cdmg: ({ attr, calc }) => Math.min((calc(attr.atk) - 2000 ) / 100 * 18, 360)
    }
  },
  {
    title: "[秘技]见者：暴击率提高[cpct]%",
    tree: 2,
    data: {
      cpct: 100
    }
  },
  {
    title: "[秘技]征服者：施放战技时，使自身和持有【军功】的队友速度提高[speed]点",
    tree: 3,
    data: {
      speed: 20
    }
  },
  {
    title: "1命：军功无视防御[ignore]%",
    cons: 1,
    data: {
      ignore: 15
    }
  },
  {
    title: "1命：爵位战技再无视防御[ignore]%",
    check: ({ params }) => params.JW === true,
    cons: 1,
    data: {
      ignore: 18
    }
  },
  {
    title: "2命：军功持有者伤害提高[dmg]%",
    cons: 2,
    data: {
      dmg: 40
    }
  },
  {
    title: "2命：自身伤害提高[dmg]%",
    cons: 2,
    data: {
      dmg: 160
    }
  },
  {
    title: "4命：终结技伤害倍率提升[qPct]%",
    cons: 4,
    data: {
      qPct: 240
    }
  },
  {
    title: "6命：军功持有者全抗穿透[kx]%",
    cons: 6,
    data: {
      kx: 20
    }
  },
  {
    title: "6命：场上存在持有【军功】的队友时，全属性抗性穿透提高[kx]%",
    cons: 6,
    data: {
      kx: 20
    }
  }
]

export const createdBy = "YuapXc"