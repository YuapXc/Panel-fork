import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ attr, artis, rule, def }) {
  if (artis.is('hp', 3)) {
    return rule('忘归人-辅助(保命)', { hp: 50, atk: 0, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('hp', 4)) {
    return rule('忘归人-辅助(保命)', { hp: 50, atk: 0, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('hp', 5)) {
    return rule('忘归人-辅助(保命)', { hp: 50, atk: 0, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('hp', 6)) {
    return rule('忘归人-辅助(保命)', { hp: 50, atk: 0, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('def', 3)) {
    return rule('忘归人-辅助(保命)', { hp: 50, atk: 0, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('def', 4)) {
    return rule('忘归人-辅助(保命)', { hp: 50, atk: 0, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('def', 5)) {
    return rule('忘归人-辅助(保命)', { hp: 50, atk: 0, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('def', 6)) {
    return rule('忘归人-辅助(保命)', { hp: 50, atk: 0, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (attr.cpct > 3) {
    return rule('忘归人-常规', { hp: 0, atk: 0, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 100, effDef: 0, effPct: 100, dmg: 0})
  }
  return def({ hp: 0, atk: 75, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 75, heal: 0, recharge: 75, effPct: 100, effDef: 0, dmg: 100 })
}