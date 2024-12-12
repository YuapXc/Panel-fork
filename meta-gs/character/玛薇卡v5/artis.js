export default function ({ attr, rule, def ,weapon}) {
  if (attr.mastery >= 50 && weapon.name === '赤角石溃杵') {
    return rule('玛薇卡-赤角蒸发', { atk: 75, def:75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 0})
  }
  if (attr.mastery < 50 && weapon.name === '赤角石溃杵') {
    return rule('玛薇卡-赤角直伤', { atk: 85, def:75, cpct: 100, cdmg: 100, dmg: 100 , recharge: 0})
  }
  if (attr.phy > 45 ) {
    return rule('玛薇卡-物理', { atk: 85 , cpct: 100 , cdmg: 100 , mastery: 0 , dmg: 0 , recharge: 0 , phy: 100 })
  }
  if (attr.mastery > 49 ) {
    return rule('玛薇卡-融化', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 0})
  }
  if (attr.mastery < 50 ) {
    return rule('玛薇卡-直伤', { atk: 85, cpct: 100, cdmg: 100, dmg: 100 , recharge: 0})
  }
  return def({ atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 })
}
