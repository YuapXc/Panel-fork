export default function ({ attr, weapon, rule, def, artis }) {
  if (attr.mastery >= 80) {
    return rule('瓦雷莎-元素反应', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 30 })
  }
    if (attr.mastery < 80 ) {
    return rule('瓦雷莎-纯色直伤', { atk: 85, cpct: 100, cdmg: 100, mastery: 0, dmg: 100 , recharge: 30})
  }
  return def({atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
}
