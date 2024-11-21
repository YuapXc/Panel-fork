export default function ({ attr, weapon, rule, def, artis }) {
  if (attr.atk > 0 ) {
    return rule('茜特菈莉-盾辅', { atk: 0, cpct: 0, cdmg: 0, mastery: 100, dmg: 0, recharge: 55})
  }
  return def({atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
}
