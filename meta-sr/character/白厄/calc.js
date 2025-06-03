export const details = [
    {
        title: "[A]逐火救世·普攻伤害",
        dmg: ({ talent }, dmg) => dmg(talent.a["技能伤害"], "a")
    },
    {
        title: "[A+]创生•血棘渡亡伤害(三目标)",
        params: { CQJS : true },
        dmg: ({ talent }, dmg) => dmg(talent.a2["技能伤害"] + talent.a2["相邻目标伤害"], "a")
    },
    {
        title: "[E]黎明创世·战技伤害",
        dmg: ({ talent }, dmg) => dmg(talent.e["技能伤害"] + talent.e["相邻目标伤害"], "e")
    },
    {
        title: "[E+]灾厄•弑魂焚诏反击伤害(五目标)",
        params: { CQJS : true, e: true },
        dmg: ({ talent }, dmg) => dmg(talent.e1["技能伤害"], "e")
    },
    {
        title: "[E+]灾厄•弑魂焚诏随机总伤害(五目标)",
        params: { CQJS : true, e: true },
        dmg: ({ talent }, dmg) => dmg(talent.e1["随机伤害"] * 4, "e")
    },
    {
        title: "[E++]支柱•死星天裁总伤害(4毁伤)",
        params: { CQJS : true },
        dmg: ({ talent }, dmg) => dmg(talent.e2["技能伤害"], "e")
    },
    {
        title: "[Q]永劫燔世最后一击伤害",
        params: { CQJS : true },
        dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
    },
    {
        title: "[T]终结之始·秘技伤害",
        dmg: ({ }, dmg) => dmg(2, "t")
    }
]

export const defDmgIdx = 5
export const mainAttr = "atk,cpct,cdmg,dmg"

export const buffs = [
    {
        title: "[天赋]此身为炬：暴击伤害提高[cdmg]%",
        data: {
            cdmg: ({ talent }) => talent.t["暴击伤害提高"] * 100
        }
    },
    {
        title: "[天赋+]命运•此躯即神：变身期间攻击力提高[atkPct]%",
        check: ({ params }) => params.CQJS === true,
        data: {
            atkPct: ({ talent }) => talent.t2["攻击力提高"] * 100
        }
    },
    {
        title: "【弑魂之炽】：每层使反击伤害倍率提高原倍率的20%",
        check: ({ params }) => params.e === true,
        data: {
            multi: ({ cons }) => ( 1 + 5 + ( cons > 3 ? 4 : 0 )) * 20
        }
    },
    {
        title: "身承炎炬万千：造成的伤害提高[dmg]%",
        data: {
            dmg: 45
        }
    },
    {
        title: "照见英雄本色：进入战斗或变身结束时，攻击力提高[atkPct]%。该效果最多叠加2层",
        data: {
            atkPct: 50 * 2
        }
    },
    {
        title: "1命：施放终结技时，暴击伤害提高[cdmg]%",
        cons: 1,
        data: {
            cdmg: 40
        }
    },
    {
        title: "2命：卡厄斯兰那的物理属性抗性穿透提高[kx]%",
        cons: 2,
        check: ({ params }) => params.CQJS === true,
        data: {
            kx: 20
        }
    }
]

export const createdBy = "YuapXc"