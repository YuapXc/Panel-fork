export const details = [
  {
    title: "[A]普攻伤害",
    dmg: ({ talent }, dmg) => dmg(talent.a["技能伤害"], "a")
  }, {
    title: "[E]战技全体护盾量",
    dmg: ({ talent, attr }, { shield }) => shield(talent.e["攻击百分比"] * attr.atk + talent.e["固定值"])
  }, {
    title: "[E+]龙灵单体护盾量",
    dmg: ({ talent, attr }, { shield }) => shield(talent.t["攻击百分比"] * attr.atk + talent.t["固定值"])
  }, {
    title: "[Q]终结技伤害",
    dmgKey: "AE",
    dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
  }, {
    title: "[Q+]终结技「同袍」伤害",
    check: ({ cons }) => cons > 5,
    dmg: ({  }, dmg) => dmg(3.3, "q")
  }, {
    title: "[Q]终结技护盾量",
    dmg: ({ talent, attr }, { shield }) => shield(talent.q["攻击百分比"] * attr.atk + talent.q["固定值"])
  }, {
    title: "[忆灵]终结技龙灵追加伤害",
    params: { LY: true },
    dmg: ({ talent }, dmg) => dmg(talent.q["追击伤害"], "t")
  }
];

export const defDmgKey = "AE";
export const mainAttr = "atk,cpct,cdmg";

export const buffs = [{
    title: "神秀：施放战技时，使成为【同袍】的目标攻击力提高，提高数值等同于丹恒•腾荒15%攻击力",
    data: {
      plus: ({ attr }) => attr.atk * 0.15
    }
  }, {
    title: "1命：使【同袍】全属性抗性穿透提高[kx]%",
    cons: 1,
    data: {
      kx: 15
    }
  }, {
    title: "2命：强化【龙灵】行动时，造成的伤害倍率提高，提高数值等同于【同袍】80%攻击力",
    check: ({ params }) => params.LY === true,
    cons: 2,
    data: {
      qPct: ({ attr }) => attr.atk * 0.8
    }
  }, {
    title: "4命：无视敌方目标[ignore]%的防御力。",
    cons: 4,
    data: {
      ignore: 12
    }
  }, {
    title: "6命：敌方全体受到的伤害提高[enemydmg]%",
    cons: 6,
    data: {
      enemydmg: 20
    }
  }
];

export const createdBy = "YuapXc";