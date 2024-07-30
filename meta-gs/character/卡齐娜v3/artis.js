export default function ({ attr, rule, def ,weapon}) {
  if (attr.mastery < 2190 ) {
    return rule('卡齐娜-直伤', { hp: 0, atk: 0 ,def:100, cpct: 100, cdmg: 100, dmg: 100 , recharge: 30})
  }
  return def({ hp: 0, atk: 85, cpct: 100, cdmg: 100, mastery: 0, dmg: 100 , recharge: 0})
}
