export default function ({ attr, weapon, rule, def, artis }) {
  if (artis.is('乐园4')) {
    return rule('赛索斯-种门超绽', { atk: 35, cpct: 85, cdmg: 85, dmg: 35, mastery: 100 , recharge: 80 })
  }
  if (attr.phy >= 10) {
    return rule('赛索斯-高级物伤流', { atk: 85 , cpct: 100 , cdmg: 100 , mastery: 0 , recharge: 35 , phy: 100 , dmg: 0 })
  }
  if (attr.mastery >= 80) {
    return rule('赛索斯-元素反应', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55 })
  }
    if (attr.mastery < 80 ) {
    return rule('赛索斯-纯色直伤', { atk: 85, cpct: 100, cdmg: 100, mastery: 0, dmg: 100 , recharge: 55})
  }
  return def({atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
}
