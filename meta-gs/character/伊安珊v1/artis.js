export default function ({ attr, weapon, rule, def, artis }) {
  if (attr.mastery >= 80 && artis.is('cpct', 5)) {
    return rule('伊安珊-元素反应', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 30 })
  }
    if (attr.mastery < 80 && artis.is('cdmg', 5)) {
    return rule('伊安珊-纯色直伤', { atk: 85, cpct: 100, cdmg: 100, mastery: 0, dmg: 100 , recharge: 30})
  }
  if (attr.atk > 5) {
    return rule('伊安珊-辅助', { atk: 100, cpct: 0, cdmg: 0, mastery: 0, dmg: 0, recharge: 100, heal: 100})
  }
  return def({atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
}
