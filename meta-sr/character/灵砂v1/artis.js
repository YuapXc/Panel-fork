export default function ({ attr, artis, rule, def }) {
  if (attr.cpct > 3) {
    return rule('灵砂-治疗', { hp: 0, atk: 100, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 100, recharge: 0, effDef: 0, effPct: 0, dmg: 0})
  }
  return def({ hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 75, effPct: 100, effDef: 0, dmg: 100 })
}