import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ attr, artis, rule, def }) {
  if (attr.cpct > 3) {
    return rule('卡芙卡-输出', { hp: 0, atk: 100, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 50, heal: 0, recharge: 50, effPct: 75, effDef: 0, dmg: 100 })
  }
  return def({ hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 75, effPct: 100, effDef: 0, dmg: 100 })
}