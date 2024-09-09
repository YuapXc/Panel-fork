export default function ({ attr, artis, rule, def }) {
  if (artis.is('def', 3)) {
    return rule('乱破-击破(肉装)', { hp: 50, atk: 75, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  if (artis.is('hp', 3)) {
    return rule('乱破-击破(肉装)', { hp: 50, atk: 75, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  if (artis.is('def', 5)) {
    return rule('乱破-击破(肉装)', { hp: 50, atk: 75, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  if (artis.is('hp', 5)) {
    return rule('乱破-击破(肉装)', { hp: 50, atk: 75, def: 50, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  if (artis.is('speed', 4)&& artis.is('cpct', 3)) {
    return rule('乱破-直伤(高速)', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  if (artis.is('speed', 4)&& artis.is('cdmg', 3)) {
    return rule('乱破-直伤(高速)', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  if (artis.is('atk', 4)&& artis.is('cpct', 3)) {
    return rule('乱破-直伤', { hp: 0, atk: 85, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  if (artis.is('atk', 4)&& artis.is('cdmg', 3)) {
    return rule('乱破-直伤', { hp: 0, atk: 85, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  if (attr.cpct > 3) {
    return rule('乱破-击破', { hp: 0, atk: 100, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 100, heal: 0, recharge: 0, effDef: 0, effPct: 0, dmg: 100})
  }
  return def({ hp: 0, atk: 75, def: 0, speed: 100, cpct: 0, cdmg: 0, stance: 75, heal: 0, recharge: 75, effPct: 100, effDef: 0, dmg: 100 })
}