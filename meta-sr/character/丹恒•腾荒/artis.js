import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ attr, artis, rule, def }) {
  if (artis.is('cpct', 3)) {
    return rule('丹恒•腾荒-输出', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100})
  }
  if (artis.is('cdmg', 3)) {
    return rule('丹恒•腾荒-输出', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100})
  }
  if (artis.is('dmg', 5)) {
    return rule('丹恒•腾荒-输出', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100})
  }
  if (attr.hp > 240) {
    return rule('丹恒•腾荒-辅助', { hp: 0, atk: 100, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 100, recharge: 100, effPct: 0, effDef: 50, dmg: 0})
  }
  return def({ hp: 0, atk: 0, def: 0, speed: 100, cpct: 50, cdmg: 50, stance: 0, heal: 100, recharge: 100, effPct: 0, effDef: 50, dmg: 100 })
}