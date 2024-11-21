export default function ({ attr, rule, def ,weapon}) {
  if (attr.mastery > 49 ) {
    return rule('火主-蒸发', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 30})
  }
  if (attr.mastery < 50 ) {
    return rule('火主-直伤', { atk: 85, cpct: 100, cdmg: 100, dmg: 100 , recharge: 30})
  }
  return def({ atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 })
}
