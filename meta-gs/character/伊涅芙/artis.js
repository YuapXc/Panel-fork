export default function ({ attr, artis, rule, def }) {
  if ( artis.is('cpct', 5) && attr.mastery < 80) {
    return rule('伊涅芙-直伤', { atk: 85, cpct: 100, cdmg: 100, dmg: 100, recharge: 55 })
  }
  if ( artis.is('cpct', 5) && attr.mastery >= 80 ) {
    return rule('伊涅芙-精通', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 55 })
  }
  if ( artis.is('cdmg', 5) && attr.mastery < 80) {
    return rule('伊涅芙-直伤', { atk: 85, cpct: 100, cdmg: 100, dmg: 100, recharge: 55 })
  }
  if ( artis.is('cdmg', 5) && attr.mastery >= 80 ) {
    return rule('伊涅芙-精通', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 55 })
  }
  if ( attr.mastery >= 80 ) {
    return rule('伊涅芙-精通', { hp: 0, atk: 100, cpct: 0, cdmg:0, mastery: 75, dmg: 0, recharge: 100})
  }
  if ( attr.mastery < 80 ) {
    return rule('伊涅芙-辅助', { hp: 0, atk: 100, cpct: 0, cdmg:0, dmg: 0, recharge: 100})
  }
  return def({ atk: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, recharge: 55 })
}
