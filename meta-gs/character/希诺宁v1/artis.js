export default function ({ weapon,attr, artis, rule, def }) {
  if (attr.heal > 34) {
    return rule('希诺宁-辅助', { hp: 0, atk: 0, def: 100, cpct: 0, cdmg: 0, mastery: 0, dmg: 0, phy: 0, recharge: 100, heal: 100 })
  }
  if (attr.hp > 0) {
    return rule('希诺宁-直伤', { hp: 0, atk: 0, def: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 })
  }
  return def({ hp: 0, atk: 0, def: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 35, heal: 0 })
}
