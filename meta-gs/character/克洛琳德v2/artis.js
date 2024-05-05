export default function ({ attr, artis, rule, def, weapon }) {
  if (attr.phy > 45 ) {
    return rule('克洛琳德-物理', { atk: 85 , cpct: 100 , cdmg: 100 , mastery: 0 , dmg: 0 , recharge: 0 , phy: 100})
  }
  if (weapon.name === '磐岩结绿' && attr.mastery < 119 ) {
    return rule('克洛琳德-绿剑直伤', { hp: 75, atk: 85 , cpct: 100, cdmg: 100, dmg: 100 , recharge: 35, mastery: 0})
  }
  if (weapon.name === '磐岩结绿' && attr.mastery > 120 ) {
    return rule('克洛琳德-绿剑反应', { hp: 75, atk: 75 , cpct: 100, cdmg: 100, dmg: 100 , recharge: 35, mastery: 75})
  }
  if (attr.mastery < 120 ) {
    return rule('克洛琳德-直伤', { atk: 85, cpct: 100, cdmg: 100, dmg: 100, recharge: 35 })
  }
  if (attr.mastery > 119) {
    return rule('克洛琳德-反应', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 35 })
  }
  return def({ atk: 75, cpct: 100, cdmg: 100, dmg: 100, recharge: 30 })
}
