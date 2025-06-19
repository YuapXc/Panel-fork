export const details = [
  {
    title: "[A]除尘旋刃·普攻伤害",
    dmg: ({ talent }, dmg) => dmg(talent.a["一段伤害"] + talent.a["二段伤害"] + talent.a["三段伤害"] + talent.a["四段伤害"], "a")
  },
  {
    title: "[E]涤净模式·稳态载频伤害",
    params: { YGD: true },
    dmg: ({ talent }, dmg) => dmg(talent.e["技能伤害"], "e")
  },
  {
    title: "[E]涤净模式·稳态载频护盾量",
    dmg: ({ attr, calc, talent }, { shield }) => shield(talent.e['护盾吸收量2'][1] + calc(attr.atk) * talent.e['护盾吸收量2'][0] / 100)
  },
  {
    title: "[E+]薇尔琪塔放电伤害",
    dmg: ({ talent }, dmg) => dmg(talent.e["薇尔琪塔放电伤害"], "e2")
  },
  {
    title: "[Q]至高律令·全域扫灭伤害",
    dmg: ({ talent }, dmg) => dmg(talent.q["技能伤害"], "q")
  },
  {
    title: "天赋「薇尔琪塔」额外伤害",
    params: { YGD: true },
    dmg: ({ }, dmg) => dmg(80, "nightsoul")
  },
  {
    title: "二命「辅助清理模块」伤害",
    check: ({ cons }) => cons > 1,
    params: { YGD: true },
    dmg: ({ }, dmg) => dmg(400, "nightsoul")
  },
  {
    title: "六命「献予你的明晨」伤害",
    check: ({ cons }) => cons === 6,
    params: { YGD: true },
    dmg: ({ }, dmg) => dmg(200, "nightsoul")
  }
];

export const defDmgIdx = 4;
export const mainAttr = "atk,cpct,cdmg,dmg";


export const buffs = [
  {
    title: "[天赋]全相重构协议：基于伊涅芙攻击力的6%，提升伊涅芙与队伍中自己的当前场上角色的元素精通",
    data: {
      mastery: ({ attr, calc }) => calc(attr.atk) * 0.06
    }
  },
  {
    title: "[天赋]月兆祝赐·象拟中继：每100点攻击力都将提升0.7%基础伤害，至多通过这种方式提升14%伤害",
    check: ({ params }) => params.YGD === true,
    data: {
      dmg: ({ attr, calc }) => Math.min(calc(attr.atk) / 100 * 0.7, 14)
    }
  },
  {
    title: "1命「载流复合」效果：使月感电反应造成的伤害提升，每100点攻击力都将提升2.5%伤害，至多通过这种方式提升50%伤害",
    check: ({ params }) => params.YGD === true,
    cons: 1,
    data: {
      dmg: ({ attr, calc }) => Math.min(calc(attr.atk) / 100 * 2.5, 50)
    }
  }
];

export const createdBy = "YuapXc";
