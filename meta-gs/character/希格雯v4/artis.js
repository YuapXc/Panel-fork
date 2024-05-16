export default function ({ attr,artis, rule, def }) {
  if (artis.is('cpct', 5) && attr.mastery < 80) {
    return rule('希格雯-直伤', { hp: 100, atk: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, recharge: 30, heal: 0 })
  }
  if (artis.is('cdmg', 5) && attr.mastery < 80) {
    return rule('希格雯-直伤', { hp: 100, atk: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, recharge: 30, heal: 0 })
  }
  if (artis.is('cpct', 5) && attr.mastery > 79) {
    return rule('希格雯-蒸发', { hp: 100, atk: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 30, heal: 0 })
  }
  if (artis.is('cdmg', 5) && attr.mastery > 79) {
    return rule('希格雯-蒸发', { hp: 100, atk: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 30, heal: 0 })
  }
  if (attr.atk > 5 ) {
    return rule('希格雯-治疗', { hp: 100 , atk: 0 , cpct: 0 , cdmg: 0 , mastery: 0 , dmg: 0 , recharge: 30 , heal: 100 })
  }
  return def({ hp: 100, atk: 50, cpct: 50, cdmg: 50, dmg: 80, recharge: 55, heal: 100 })
}
