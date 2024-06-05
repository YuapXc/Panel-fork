export default function ({ attr, weapon, rule, def }) {
  if (attr.mastery < 4000 ) {
    return rule('艾梅莉埃-燃烧', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 35})
  }
  return def({ atk: 55, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, recharge: 55 })
}
