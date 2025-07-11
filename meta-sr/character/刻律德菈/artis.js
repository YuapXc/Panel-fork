import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ attr, artis, rule, def }) {
  if (artis.is('hp', 3)) {
    return rule('刻律德菈-辅助(保命)', { hp: 75, atk: 100, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 0})
  }
  if (artis.is('hp', 4)) {
    return rule('刻律德菈-辅助(保命)', { hp: 75, atk: 100, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 0})
  }
  if (artis.is('hp', 5)) {
    return rule('刻律德菈-辅助(保命)', { hp: 75, atk: 100, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 0})
  }
  if (artis.is('hp', 6)) {
    return rule('刻律德菈-辅助(保命)', { hp: 75, atk: 100, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 0})
  }
  if (artis.is('def', 3)) {
    return rule('刻律德菈-辅助(保命)', { hp: 75, atk: 100, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 0})
  }
  if (artis.is('def', 4)) {
    return rule('刻律德菈-辅助(保命)', { hp: 75, atk: 100, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 0})
  }
  if (artis.is('def', 5)) {
    return rule('刻律德菈-辅助(保命)', { hp: 75, atk: 100, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 0})
  }
  if (artis.is('def', 6)) {
    return rule('刻律德菈-辅助(保命)', { hp: 75, atk: 100, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 0})
  }
  if (attr.hp > 240) {
    return rule('刻律德菈-辅助', { hp: 0, atk: 100, def: 0, speed: 100, cpct: 0, cdmg: 100, stance: 0, heal: 0, recharge: 100, effDef: 50, effPct: 0, dmg: 100})
  }
  return def({ hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 100, stance: 0, heal: 0, recharge: 100, effPct: 0, effDef: 50, dmg: 0 })
}