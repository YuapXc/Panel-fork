export default function ({ attr, artis, weapon, rule, def }) {
  if (artis.is('冰套4')) {
    return rule('玛拉妮-冰风4', { hp: 100, cpct: 100, cdmg: 100, dmg: 100, recharge: 55 })
  }
  if (weapon.name === '试作金珀' && attr.heal > 1 ) {
    return rule('玛拉妮-治疗', { hp: 100, atk: 50, cpct: 50, cdmg: 50, dmg: 40, recharge: 100 , heal: 100 })
  }
  if (weapon.name === '昭心' && attr.phy > 10 ) {
    return rule('玛拉妮-物理', { hp: 0, atk: 75, cpct: 100, cdmg: 100, dmg: 0, phy: 100 , recharge: 0 , heal: 0 })
  }
  if (weapon.name === '天空之卷' && attr.phy > 10 ) {
    return rule('玛拉妮-物理', { hp: 0, atk: 75, cpct: 100, cdmg: 100, dmg: 0, phy: 100 , recharge: 0 , heal: 0 })
  }
  if (attr.mastery >= 80 && attr.mastery < 5400 ) {
    return rule('玛拉妮-蒸发', { hp: 100, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 35 })
  }
  if (attr.mastery < 80 && attr.cpct * 2 + attr.cdmg > 240) {
    return rule('玛拉妮-直伤', { hp: 100, cpct: 100, cdmg: 100, dmg: 100 , recharge: 50})
  }
  if (attr.mastery < 80 ) {
    return rule('玛拉妮-直伤', { hp: 100, cpct: 100, cdmg: 100, dmg: 100 , recharge: 50})
  }
  return def({ atk: 75, cpct: 100, cdmg: 100, mastery: 50, dmg: 100 , recharge: 35 })
}
