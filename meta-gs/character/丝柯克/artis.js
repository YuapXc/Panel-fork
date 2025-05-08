export default function ({ attr, artis, rule, def }) {
  if ( attr.mastery >= 80 ) {
    return rule('丝柯克-融化', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 0 })
  }
  if ( attr.cpct > 1) {
    return rule('丝柯克-直伤', { atk: 85, cpct: 100, cdmg: 100, dmg: 100, recharge: 0 })
  }
  return def({ atk: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, recharge: 0 })
}
