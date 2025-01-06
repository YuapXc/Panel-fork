export default function ({ attr, weapon, rule, def, artis }) {
  if (artis.is('cpct', 5)) {
    return rule('梦见月瑞希-输出', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
  }
  if (artis.is('cdmg', 5)) {
    return rule('梦见月瑞希-输出', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
  }
  if (attr.atk > 0 ) {
    return rule('梦见月瑞希-治疗', { atk: 0, cpct: 0, cdmg: 0, mastery: 100, dmg: 0, recharge: 55, heal: 100})
  }
  return def({atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
}
