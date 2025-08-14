export default function ({ attr, artis, rule, def }) {
  if ( attr.mastery >= 80 ) {
    return rule('爱诺-精通', { hp: 0, atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 50})
  }
  if ( attr.mastery < 80 ) {
    return rule('爱诺-直伤', { hp: 0, atk: 85, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, recharge: 50})
  }
  return def({ atk: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, recharge: 55 })
}
