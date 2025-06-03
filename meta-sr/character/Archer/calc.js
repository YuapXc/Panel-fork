export const details = [
    {
        title: "[A]干将•莫邪·普攻伤害",
        dmg: ({ talent }, dmg) => dmg(talent.a["技能伤害"], "a")
    },
    {
        title: "[E]伪•螺旋剑·战技伤害",
        params: { e: true },
        dmg: ({ talent }, dmg) => dmg(talent.e["技能伤害"], "e")
    },
    {
        title: "[Q]无限剑制·终结技伤害",
        dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
    },
    {
        title: "[T]心眼(真)·追加伤害",
        dmg: ({ talent }, dmg) => dmg(talent.t["技能伤害"], "t")
    }
]

export const defDmgIdx = 2
export const mainAttr = "atk,cpct,cdmg,dmg"

export const buffs = [
    {
        title: "[天赋]守护者：战技点大于等于4点，Archer的暴击伤害提高[cdmg]%",
        data: {
            cdmg: 120
        }
    },
    {
        title: "【回路连接】状态下施放战技后，使战技造成的伤害提高[eDmg]%，该效果可以叠加2层",
        check: ({ params }) => params.e === true,
        data: {
            eDmg: ({ talent , cons }) => talent.e["战技伤害提高"] * 100 * (2 + (cons > 5 ? 1 : 0))
        }
    },
    {
        title: "2命：施放终结技时，使敌方目标的量子属性的抗性降低[kx]%",
        cons: 2,
        data: {
            kx: 20
        }
    },
    {
        title: "4命：造成的终结技伤害提高[qDmg]%",
        cons: 4,
        data: {
            qDmg: 150
        }
    },
    {
        title: "6命：造成的战技伤害无视[ignore]%的防御力。",
        cons: 6,
        data: {
            ignore: 20
        }
    }
]

export const createdBy = "YuapXc"