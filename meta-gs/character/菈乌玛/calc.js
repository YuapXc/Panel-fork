export const details = [
  {
    title: "A「唤灵之祷」伤害",
    dmg: ({ talent }, dmg) => dmg(talent.a["唤灵之祷伤害"], "a")
  }, {
    title: "E点按伤害",
    dmg: ({ talent }, dmg) => dmg(talent.e["点按伤害"], "e")
  }, {
    title: "E长按一段伤害(3枚草露)",
    dmg: ({ talent }, dmg) => dmg(talent.e["长按一段伤害"] * 3, "e")
  },   {
    title: "E长按二段伤害(3枚草露)",
    params: { Lunar: true },
    dmg: ({ talent, attr }, dmg) => dmg((talent.e["长按二段伤害"] * 3) * attr.mastery / 100, "e", "lunarCharged")
  }, {
    title: "E「霜林圣域」攻击伤害",
    params: { slsy: true },
    dmg: ({ talent, attr }, dmg) => dmg(talent.e["霜林圣域攻击伤害2"][0] * attr.atk / 100 + talent.e["霜林圣域攻击伤害2"][1] * attr.mastery / 100, "e")
  }, {
    title: "Q绽放反应伤害提升",
    dmg: ({ talent, attr }, dmg) => dmg(talent.q["绽放、超绽放、烈绽放反应伤害提升"] * attr.mastery / 100, "q")
  }, {
    title: "Q月绽放反应伤害提升",
    dmg: ({ talent, attr }, dmg) => dmg(talent.q["月绽放反应伤害提升"] * attr.mastery / 100, "q")
  }, {
    check: ({ cons }) => cons > 0,
    title: "1命「生之纺线」回复量",
    dmg: ({ attr, calc }, { heal }) => heal(calc(attr.mastery) * 5)
  }, {
    check: ({ cons }) => cons > 1,
    title: "2命绽放反应伤害额外提升",
    dmg: ({ calc, attr }, { basic }) => basic(calc(attr.mastery) * 5, "", "bloom")
  }, {
    check: ({ cons }) => cons > 1,
    title: "2命月绽放反应伤害额外提升",
    dmg: ({ calc, attr }, { basic }) => basic(calc(attr.mastery) * 2.5, "", "lunarCharged")
  }, {
    check: ({ cons }) => cons === 6,
    title: "6命霜林圣域附加伤害",
    params: { Lunar: true },
    dmg: ({ calc, attr }, { basic }) => basic(calc(attr.mastery) * 3.2, "", "lunarCharged")
  }, {
    check: ({ cons }) => cons === 6,
    title: "6命普通攻击附加伤害",
    params: { Lunar: true },
    dmg: ({ calc, attr }, { basic }) => basic(calc(attr.mastery) * 2, "", "lunarCharged")
  }
]

export const defDmgIdx = 0
export const mainAttr = "atk,cpct,cdmg,mastery"

export const buffs = [
  {
    title: "[E]圣言述咏·终宵永眠：菈乌玛的元素战技或霜林圣域的攻击命中敌人时，将使该敌人的草元素抗性与水元素抗性降低[fykx]%",
    data: {
      fykx: ({ talent }) => talent.e["元素抗性降低"]
    }
  }, {
    check: ({ params }) => params.Lunar,
    title: "天赋-千籁恩宠：触发绽放反应时转为触发月绽放反应,基础伤害提升[fypct]%",
    data: {
      fypct: ({ attr, calc }) => Math.min((calc(attr.mastery) * 0.0175), 14)
    }
  }, {
    check: ({ params }) => params.slsy,
    title: "天赋-奉向甘泉的沐濯：霜林圣域伤害提升[eDmg]%",
    data: {
      eDmg: ({ attr, calc }) => Math.min((calc(attr.mastery) * 0.04), 32)
    }
  }, {
    check: ({ cons }) => cons > 1,
    title: "菈乌玛2命：绽放反应伤害额外提升[bloom]%",
    cons: 2,
    data: {
      bloom: ({ attr, calc }) => calc(attr.mastery) * 5
    }
  }, {
    check: ({ cons }) => cons > 1,
    title: "菈乌玛2命：月绽放反应伤害额外提升[fypct]%",
    cons: 2,
    data: {
      fypct: ({ attr, calc }) => calc(attr.mastery) * 2.5
    }
  }, {
    check: ({ cons }) => cons === 6,
    title: "菈乌玛6命：月绽放反应伤害擢升25%",
    cons: 6,
    data: {
      fypct: 25
    }
  }
]
