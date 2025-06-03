export const details = [
    {
        title: "[A]风王结界·普攻伤害",
        dmg: ({ talent }, dmg) => dmg(talent.a["技能伤害"], "a")
    },
    {
        title: "[A+]解放的金色王权(双目标)",
        params: { a: true },
        dmg: ({ talent }, dmg) => dmg(talent.a2["技能伤害"]+talent.a2["额外伤害"], "a")
    },
    {
        title: "[A+]解放的金色王权(单目标)",
        params: { a: true },
        dmg: ({ talent }, dmg) => dmg(talent.a2["技能伤害"]+talent.a2["额外伤害2"], "a")
    },
    {
        title: "[E]风王铁锤·战技总伤害",
        params: { e: true },
        dmg: ({ talent }, dmg) => dmg(talent.e["技能伤害"]+talent.e["相邻目标伤害"], "e")
    },
    {
        title: "[Q]誓约胜利之剑·终结技伤害",
        params: { q: true },
        dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
    },
    {
        title: "[Q]终结技随机伤害十次累加",
        dmg: ({ talent }, dmg) => dmg(talent.q["随机伤害"] * 10, "q")
    }
]

export const defDmgIdx = 4
export const mainAttr = "atk,cpct,cdmg,dmg"

export const buffs = [
    {
        title: "[天赋]龙之炉心：终结技触发时伤害提高[dmg]%",
        data: {
            dmg: ({ talent }) => talent.t["伤害提高"] * 100
        }
    },
    {
        title: "[秘技]骑士王的登场：战斗开始时Saber攻击力提高[dmg]%",
        data: {
            dmg: 35
        }
    },
    {
        title: "龙之骑士：Saber的暴击率提高[cpct]%",
        data: {
            cpct: 20
        }
    },
    {
        title: "星之冠冕：施放战技时，暴击伤害提高[cdmg]%",
        data: {
            cdmg: 50
        }
    },
    {
        title: "1命：造成的终结技伤害提高[qDmg]%",
        cons: 1,
        data: {
            qDmg: 60
        }
    },
    {
        title: "2命：每获得1点【炉心共鸣】，使Saber造成的伤害无视目标1%的防御力，该效果可叠加15次",
        cons: 2,
        data: {
            ignore: 1 * 15
        }
    },
    {
        title: "4命：风属性抗性穿透提高[kx]%",
        cons: 4,
        data: {
            kx: 8
        }
    },
    {
        title: "4命：施放终结技后，风属性抗性穿透提高4%，可叠加3次。",
        cons: 4,
        data: {
            kx: 4 * 3
        }
    },
    {
        title: "6命：造成的终结技伤害的风属性抗性穿透提高[kx]%",
        cons: 6,
        check: ({ params }) => params.q === true,
        data: {
            kx: 20
        }
    }
]

export const createdBy = "YuapXc"