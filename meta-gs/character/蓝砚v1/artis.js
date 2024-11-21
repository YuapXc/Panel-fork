export default function ({ attr, weapon, rule, def, artis }) {
  if (attr.hp < 999999 ) {
    return rule('蓝砚-盾辅', { atk: 100, cpct: 0, cdmg: 0, mastery: 0, dmg: 0, recharge: 55})
  }
  return def({atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
}
