export default function ({ attr, artis, rule, def }) {
  if (artis.is('cpct', 3)) {
    return rule('银狼-输出', { hp: 0, atk: 75, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effDef: 0, effPct: 100, dmg: 100})
  }
  if (artis.is('cdmg', 3)) {
    return rule('银狼-输出', { hp: 0, atk: 85, def: 0, speed: 75, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effDef: 0, effPct: 100, dmg: 100})
  }
  if (artis.is('cpct', 3) && artis.is('speed', 4)) {
    return rule('银狼-输出(高速)', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effDef: 0, effPct: 100, dmg: 100})
  }
  if (artis.is('cdmg', 3) && artis.is('speed', 4)) {
    return rule('银狼-输出(高速)', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effDef: 0, effPct: 100, dmg: 100})
  }
  if (artis.is('dmg', 5)) {
    return rule('银狼-输出', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 50, effDef: 0, effPct: 100, dmg: 100})
  }
  if (artis.is('hp', 3)) {
    return rule('银狼-辅助(纯肉)', { hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('hp', 4)) {
    return rule('银狼-辅助(纯肉)', { hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('hp', 5)) {
    return rule('银狼-辅助(纯肉)', { hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('hp', 6)) {
    return rule('银狼-辅助(纯肉)', { hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('def', 3)) {
    return rule('银狼-辅助(纯肉)', { hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('def', 4)) {
    return rule('银狼-辅助(纯肉)', { hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('def', 5)) {
    return rule('银狼-辅助(纯肉)', { hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (artis.is('def', 6)) {
    return rule('银狼-辅助(纯肉)', { hp: 75, atk: 0, def: 75, speed: 100, cpct: 0, cdmg: 0, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 0})
  }
  if (attr.hp > 240) {
    return rule('银狼-辅助', { hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 100, effDef: 30, effPct: 100, dmg: 100})
  }
  return def({ hp: 0, atk: 75, def: 0, speed: 100, cpct: 100, cdmg: 100, stance: 0, heal: 0, recharge: 75, effPct: 100, effDef: 0, dmg: 100 })
}