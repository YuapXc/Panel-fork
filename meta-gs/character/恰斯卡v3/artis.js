export default function ({ weapon,attr, artis, rule, def }) {
  if (attr.atk > 34) {
    return rule('恰斯卡-直伤', { hp: 0, atk: 85, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 35, heal: 0 })
  }
  return def({ hp: 0, atk: 0, def: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 35, heal: 0 })
}
