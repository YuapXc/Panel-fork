import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ attr, artis, rule, def }) {
  if (artis.is('speed', 4)) {
    return rule('刃-输出(高速)', { hp: 100, atk: 0, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100})
  }
  if (attr.speed > 119) {
    return rule('刃-输出(速度)', { hp: 100, atk: 0, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100})
  }
  if (attr.cpct > 3) {
    return rule('刃-输出', { hp: 100, atk: 0, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effPct: 0, effDef: 0, dmg: 100})
  }
  return def({ hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 75, effPct: 100, effDef: 0, dmg: 100 })
}