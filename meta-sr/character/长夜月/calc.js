export const details = [
  {
    title: "[A]普攻伤害",
    check: ({ cons }) => cons < 1,
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a["技能伤害"], "a")
  }, {
    title: "[Q+]终结技伤害",
    check: ({ cons }) => cons < 1,
    dmgKey: "AE",
    params: { Memosprite: true },
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.q["长夜伤害"], "q")
  }, {
    title: "[A]普攻伤害(1目标)",
    check: ({ cons }) => cons > 0,
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a["技能伤害"] * 1.5, "a")
  }, {
    title: "[Q+]终结技伤害(1目标)",
    check: ({ cons }) => cons > 0,
    dmgKey: "AE",
    params: { Memosprite: true },
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.q["长夜伤害"] * 1.5, "q")
  }, {
    title: "[A]普攻伤害(4目标)",
    check: ({ cons }) => cons > 0,
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a["技能伤害"] * 1.2, "a")
  }, {
    title: "[Q+]终结技伤害(4目标)",
    check: ({ cons }) => cons > 0,
    params: { Memosprite: true },
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.q["长夜伤害"] * 1.2, "q")
  }
];

export const defDmgKey = "AE";
export const mainAttr = "hp,atk,cpct,cdmg";

export const buffs = [{
    title: "[E]白昼悄然离去：召唤忆灵时，使我方全体忆灵的暴击伤害提高[cdmg]%",
    check: ({ params }) => params.Memosprite === true,
    data: {
      cdmg: ({ talent }) => talent.e["爆伤提高"] * 100
    }
  }, {
    title: "[Q]至暗之谜：敌方全体受到的伤害提高[enemydmg]%，长夜月和忆灵「长夜」造成的伤害提高[dmg]%",
    data: {
      enemydmg: ({ talent }) => talent.q["受到的伤害提高"] * 100,
      dmg: ({ talent }) => talent.q["伤害提高"] * 100
    }
  }, {
    title: "[T]今夜与我同行：长夜月或忆灵「长夜」每次生命降低时，使自身和忆灵「长夜」的暴击伤害提高[cdmg]%",
    data: {
      cdmg: ({ talent }) => talent.t["爆伤提高"] * 100
    }
  }, {
    title: "[秘技]愿有冷雨落下：获得与战技相同的提高我方全体忆灵[cdmg]%暴击伤害的效果",
    check: ({ params }) => params.Memosprite === true,
    data: {
      cdmg: ({ talent }) => talent.e["爆伤提高"] * 100
    }
  }, {
    title: "天亮了，雨落了：我方全体忆灵的暴击伤害提高[cdmg]%",
    check: ({ params }) =>  params.Memosprite === true,
    data: {
      cdmg: 50
    }
  }, {
    title: "天黑黑，月寂寂：长夜月和忆灵「长夜」的暴击率提高30%",
    data: {
      cpct: 30
    }
  }, {
    title: "6命：全属性抗性穿透提高20%",
    cons: 6,
    data: {
      kx: 20
    }
  }
];

export const createdBy = "YuapXc";