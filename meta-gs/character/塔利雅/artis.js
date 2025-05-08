export default function ({ attr, weapon, rule, def, artis }) {
  if (attr.cpct < 51 ) {
    return rule('塔利雅-盾辅', { hp: 100,atk: 0, cpct: 0, cdmg: 0, mastery: 0, dmg: 0, recharge: 75})
  }
  if (artis.is('cpct', 5)) {
    return rule('塔利雅-输出', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
  }
  if (artis.is('cdmg', 5)) {
    return rule('塔利雅-输出', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
  }
  if (attr.atk > 0 ) {
    return rule('塔利雅-盾辅', { hp: 100,atk: 0, cpct: 0, cdmg: 0, mastery: 0, dmg: 0, recharge: 75})
  }
  return def({atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
}
