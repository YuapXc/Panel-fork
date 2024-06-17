export default function ({ attr, weapon, rule, def }) {
  if (attr.mastery > 99 ) {
    return rule('艾梅莉埃-反应', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 35})
  }
  if (attr.mastery < 100 ) {
    return rule('艾梅莉埃-常规', { atk: 85, cpct: 100, cdmg: 100, mastery: 0, dmg: 100 , recharge: 35})
  }
  return def({ atk: 55, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, recharge: 55 })
}