export const details = [
  {
    title: "[A]普攻伤害",
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a["技能伤害"], "a")
  }, {
    title: "战技伤害",
    params: { Memosprite: true },
    dmg: ({ talent }, dmg) => {
      const eDmg = dmg(talent.e["技能伤害"], "e");
      return {
        dmg: eDmg.dmg,
        avg: eDmg.dmg
      };
    }
  }, {
    title: "[Q+]终结技伤害",
    params: { Memosprite: true },
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.q["技能伤害"], "q")
  }, {
    title: "忆灵技伤害(单体)",
    dmg: ({ talent }, dmg) => dmg(talent.me["单体伤害"], "me")
  }, {
    title: "忆灵技伤害(群体)",
    dmg: ({ talent }, dmg) => dmg(talent.me2["群体伤害"], "me2")
  }
];

export const defDmgIdx = 2;
export const mainAttr = "atk,cpct,cdmg";

export const buffs = [{
    title: "战技：召唤忆灵时，使我方全体忆灵的暴击伤害提高[cdmg]%",
    check: ({ params }) => params.Memosprite === true,
    data: {
      cdmg: ({ talent }) => talent.e['暴击伤害提高']
    }
  }, {
    title: "天赋-今夜与我同行：长夜月或忆灵「长夜」每次生命降低时，使自身和忆灵「长夜」的暴击伤害提高[cdmg]%",
    data: {
      cdmg: ({ talent }) => talent.t['暴击伤害提高']
    }
  }
];

export const createdBy = "其实雨很好";