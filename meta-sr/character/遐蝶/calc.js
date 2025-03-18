export const details = [{
  title: '[A]哀悼，死海之涟漪-伤害',
  params: { L: false, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
},{
  title: '[E]缄默，幽蝶之轻抚-主目标伤害',
  params: { L: false, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['目标伤害'] * attr.hp, 'e')
},{
  title: '[E]缄默，幽蝶之轻抚-相邻目标伤害',
  params: { L: false, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['相邻目标伤害'] * attr.hp, 'e')
},{
  title: '[E+]骸爪，冥龙之环拥-首段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害'] * attr.hp, 'e')
},{
  title: '[E+]骸爪，冥龙之环拥-尾段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害·死龙'] * attr.hp, 'e')
},{
  title: '[忆灵]擘裂冥茫的爪痕-伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me['技能伤害'] * attr.hp, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-首段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['技能伤害'] * attr.hp, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-中段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['二次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['三次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[忆灵]灼掠幽墟的晦翼-单次伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp, 'me')
},{
  title: '[忆灵]灼掠幽墟的晦翼-全部伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmgKey: 'AE',
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 6, 'me')
}, {
  title: '[E+]骸爪，冥龙之环拥-首段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害'] * attr.hp * 1.4, 'e')
},{
  title: '[E+]骸爪，冥龙之环拥-尾段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害·死龙'] * attr.hp * 1.4, 'e')
},{
  title: '[忆灵]擘裂冥茫的爪痕-伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me['技能伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-首段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['技能伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-中段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['二次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['三次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[忆灵]灼掠幽墟的晦翼-单次伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[忆灵]灼掠幽墟的晦翼-全部伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: false },
  dmgKey: 'AE',
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 1.4 * 6, 'me')
},{
  title: '[忆灵]死龙生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 0 + 320 * 100)
    }
  }
},{
  title: '[蝶记缇藿-A]哀悼，死海之涟漪-伤害',
  params: { L: false, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
},{
  title: '[蝶记缇藿-E]缄默，幽蝶之轻抚-主目标伤害',
  params: { L: false, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['目标伤害'] * attr.hp, 'e')
},{
  title: '[蝶记缇藿-E]缄默，幽蝶之轻抚-相邻目标伤害',
  params: { L: false, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['相邻目标伤害'] * attr.hp, 'e')
},{
  title: '[蝶记缇藿-E+]骸爪，冥龙之环拥-首段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害'] * attr.hp, 'e')
},{
  title: '[蝶记缇藿-E+]骸爪，冥龙之环拥-尾段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害·死龙'] * attr.hp, 'e')
},{
  title: '[蝶记缇藿-忆灵]擘裂冥茫的爪痕-伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me['技能伤害'] * attr.hp, 'me')
},{
  title: '[蝶记缇藿-忆灵]燎尽黯泽的焰息-首段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['技能伤害'] * attr.hp, 'me')
},{
  title: '[蝶记缇藿-忆灵]燎尽黯泽的焰息-中段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['二次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[蝶记缇藿-忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['三次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[蝶记缇藿-忆灵]灼掠幽墟的晦翼-单次伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp, 'me')
},{
  title: '[蝶记缇藿-忆灵]灼掠幽墟的晦翼-全部伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 6, 'me')
},{
  title: '[蝶记缇藿-E+]骸爪，冥龙之环拥-首段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害'] * attr.hp * 1.4, 'e')
},{
  title: '[蝶记缇藿-E+]骸爪，冥龙之环拥-尾段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害·死龙'] * attr.hp * 1.4, 'e')
},{
  title: '[蝶记缇藿-忆灵]擘裂冥茫的爪痕-伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me['技能伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶记缇藿-忆灵]燎尽黯泽的焰息-首段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['技能伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶记缇藿-忆灵]燎尽黯泽的焰息-中段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['二次释放倍率提高']) * attr.hp * 1.4, 'me')
},{
  title: '[蝶记缇藿-忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['三次释放倍率提高']) * attr.hp * 1.4, 'me')
},{
  title: '[蝶记缇藿-忆灵]灼掠幽墟的晦翼-单次伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶记缇藿-忆灵]灼掠幽墟的晦翼-全部伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: true,teamA: false,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 6 * 1.4, 'me')
},{
  title: '[蝶日缇藿-A]哀悼，死海之涟漪-伤害',
  params: { L: false, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
},{
  title: '[蝶日缇藿-E]缄默，幽蝶之轻抚-主目标伤害',
  params: { L: false, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['目标伤害'] * attr.hp, 'e')
},{
  title: '[蝶日缇藿-E]缄默，幽蝶之轻抚-相邻目标伤害',
  params: { L: false, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['相邻目标伤害'] * attr.hp, 'e')
},{
  title: '[蝶日缇藿-E+]骸爪，冥龙之环拥-首段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害'] * attr.hp, 'e')
},{
  title: '[蝶日缇藿-E+]骸爪，冥龙之环拥-尾段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害·死龙'] * attr.hp, 'e')
},{
  title: '[蝶日缇藿-忆灵]擘裂冥茫的爪痕-伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me['技能伤害'] * attr.hp, 'me')
},{
  title: '[蝶日缇藿-忆灵]燎尽黯泽的焰息-首段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['技能伤害'] * attr.hp, 'me')
},{
  title: '[蝶日缇藿-忆灵]燎尽黯泽的焰息-中段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['二次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[蝶日缇藿-忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['三次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[蝶日缇藿-忆灵]灼掠幽墟的晦翼-单次伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp, 'me')
},{
  title: '[蝶日缇藿-忆灵]灼掠幽墟的晦翼-全部伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 6, 'me')
},{
  title: '[蝶日缇藿-E+]骸爪，冥龙之环拥-首段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害'] * attr.hp * 1.4, 'e')
},{
  title: '[蝶日缇藿-E+]骸爪，冥龙之环拥-尾段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害·死龙'] * attr.hp * 1.4, 'e')
},{
  title: '[蝶日缇藿-忆灵]擘裂冥茫的爪痕-伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me['技能伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶日缇藿-忆灵]燎尽黯泽的焰息-首段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['技能伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶日缇藿-忆灵]燎尽黯泽的焰息-中段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['二次释放倍率提高']) * attr.hp * 1.4, 'me')
},{
  title: '[蝶日缇藿-忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['三次释放倍率提高']) * attr.hp * 1.4, 'me')
},{
  title: '[蝶日缇藿-忆灵]灼掠幽墟的晦翼-单次伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶日缇藿-忆灵]灼掠幽墟的晦翼-全部伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: true,teamB: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 6 * 1.4, 'me')
},{
  title: '[蝶阮缇藿-A]哀悼，死海之涟漪-伤害',
  params: { L: false, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
},{
  title: '[蝶阮缇藿-E]缄默，幽蝶之轻抚-主目标伤害',
  params: { L: false, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['目标伤害'] * attr.hp, 'e')
},{
  title: '[蝶阮缇藿-E]缄默，幽蝶之轻抚-相邻目标伤害',
  params: { L: false, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['相邻目标伤害'] * attr.hp, 'e')
},{
  title: '[蝶阮缇藿-E+]骸爪，冥龙之环拥-首段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害'] * attr.hp, 'e')
},{
  title: '[蝶阮缇藿-E+]骸爪，冥龙之环拥-尾段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害·死龙'] * attr.hp, 'e')
},{
  title: '[蝶阮缇藿-忆灵]擘裂冥茫的爪痕-伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me['技能伤害'] * attr.hp, 'me')
},{
  title: '[蝶阮缇藿-忆灵]燎尽黯泽的焰息-首段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['技能伤害'] * attr.hp, 'me')
},{
  title: '[蝶阮缇藿-忆灵]燎尽黯泽的焰息-中段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['二次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[蝶阮缇藿-忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['三次释放倍率提高']) * attr.hp, 'me')
},{
  title: '[蝶阮缇藿-忆灵]灼掠幽墟的晦翼-单次伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp, 'me')
},{
  title: '[蝶阮缇藿-忆灵]灼掠幽墟的晦翼-全部伤害',
  check: ({ cons }) => cons < 1,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 6, 'me')
},{
  title: '[蝶阮缇藿-E+]骸爪，冥龙之环拥-首段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害'] * attr.hp * 1.4, 'e')
},{
  title: '[蝶阮缇藿-E+]骸爪，冥龙之环拥-尾段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['技能伤害·死龙'] * attr.hp * 1.4, 'e')
},{
  title: '[蝶阮缇藿-忆灵]擘裂冥茫的爪痕-伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me['技能伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶阮缇藿-忆灵]燎尽黯泽的焰息-首段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['技能伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶阮缇藿-忆灵]燎尽黯泽的焰息-中段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['二次释放倍率提高']) * attr.hp * 1.4, 'me')
},{
  title: '[蝶阮缇藿-忆灵]燎尽黯泽的焰息-尾段攻击伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.me2['技能伤害'] + talent.me2['三次释放倍率提高']) * attr.hp * 1.4, 'me')
},{
  title: '[蝶阮缇藿-忆灵]灼掠幽墟的晦翼-单次伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 1.4, 'me')
},{
  title: '[蝶阮缇藿-忆灵]灼掠幽墟的晦翼-全部伤害',
  check: ({ cons }) => cons > 0,
  params: { L: true, X: false, team: false,teamA: false,teamB: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.me2['灼掠幽墟的晦翼伤害'] * attr.hp * 6 * 1.4, 'me')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ cons, params }) =>  params.L === true,
  title: '遗世冥域：敌方全体全属性抗性降低[kx]%',
  data: {
    kx: ({ talent, attr }) => talent.q['全属性抗性降低'] * 100
  }
},{
  title: '新蕊3层：遐蝶与死龙造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.t['伤害提高'] * 100 * 3
  }
},{
  check: ({ cons, params }) =>  params.L === true,
  title: '震彻寂壤的怒啸：我方全体造成的伤害提高10%',
  data: {
    dmg: 10
  }
},{
  title: '倒置的火炬：速度提高40%',
  data: {
    speedPct: 40
  }
},{
  check: ({ cons, params }) =>  params.X === true,
  title: '西风的驻足：燎尽黯泽的焰息造成的伤害提高180%',
  data: {
    dmg: 180
  }
},{
  title: '1命：【骸爪，冥龙之环拥】、【擘裂冥茫的爪痕】、【燎尽黯泽的焰息】、【灼掠幽墟的晦翼】对其造成的伤害为原伤害的140%',
  cons: 1,
  data: {
    dmg: 0
  }
},{
  title: '4命：治疗时的回复量提高20%',
  cons: 4,
  data: {
    heal: 20
  }
},{
  title: '6命：量子属性抗性穿透提高20%',
  cons: 6,
  data: {
    kx: 20
  }
},{
  check: ({ cons, params }) => params.team === true,
  title: '藿藿 遣神役鬼：攻击力提升[atkPct]%',
  data: {
    atkPct: 40
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '藿藿 惊魂夜：攻击力提升[atkPct]%',
  data: {
    atkPct: 12
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '缇宝 神启：全属性抗性穿透提高[atkPct]%',
  data: {
    kx: 24
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '缇宝 结界：敌方目标受到的伤害提高[enemydmg]%',
  data: {
    enemydmg: 30
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '缇宝 如果时间是一朵花：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 48
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '记忆主 伙伴一起：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '记忆主 1命：暴击率提高[cpct]%',
  data: {
    cpct: 10
  }
},{
  check: ({ cons, params }) => params.teamA === true,
  title: '藿藿 遣神役鬼：攻击力提升[atkPct]%',
  data: {
    atkPct: 40
  }
}, {
  check: ({ cons, params }) => params.teamA === true,
  title: '藿藿 惊魂夜：攻击力提升[atkPct]%',
  data: {
    atkPct: 12
  }
}, {
  check: ({ cons, params }) => params.teamA === true,
  title: '缇宝 神启：全属性抗性穿透提高[atkPct]%',
  data: {
    kx: 24
  }
}, {
  check: ({ cons, params }) => params.teamA === true,
  title: '缇宝 结界：敌方目标受到的伤害提高[enemydmg]%',
  data: {
    enemydmg: 30
  }
}, {
  check: ({ cons, params }) => params.teamA === true,
  title: '缇宝 如果时间是一朵花：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 48
  }
},{
  check: ({ cons, params }) =>  params.teamA === true,
  title: '星期日 回到大地的飞行：造成的伤害提升[dmg]%',
  data: {
    dmg: 45
  }
},{
  check: ({ cons, params }) =>  params.teamA === true,
  title: '星期日：造成的伤害提升[dmg]%,暴击伤害提升[cdmg]%,暴击率提升[cpct]%',
  data: {
    dmg: 80,
    cdmg: 100,
    cpct: 20
  }
},{
  check: ({ cons, params }) =>  params.teamA === true,
  title: '星期日 1命：无视目标40%的防御力。',
  data: {
    ignore: 40
  }
},{
  check: ({ cons, params }) => params.teamA === true,
  title: '星期日 司铎套：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 40
  }
},{
  check: ({ cons, params }) => params.teamB === true,
  title: '藿藿 遣神役鬼：攻击力提升[atkPct]%',
  data: {
    atkPct: 40
  }
}, {
  check: ({ cons, params }) => params.teamB === true,
  title: '藿藿 惊魂夜：攻击力提升[atkPct]%',
  data: {
    atkPct: 12
  }
}, {
  check: ({ cons, params }) => params.teamB === true,
  title: '缇宝 神启：全属性抗性穿透提高[atkPct]%',
  data: {
    kx: 24
  }
}, {
  check: ({ cons, params }) => params.teamB === true,
  title: '缇宝 结界：敌方目标受到的伤害提高[enemydmg]%',
  data: {
    enemydmg: 30
  }
}, {
  check: ({ cons, params }) => params.teamB === true,
  title: '缇宝 如果时间是一朵花：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 48
  }
},{
  title: '阮梅 0+1：弱点击破效率提高50%，击破特攻提高20%，抗性穿透提高25%，速度提高10%，造成的伤害提高24%',
  check: ({ params }) => params.teamB === true,
  data: {
    stance: 20,
    kx: 25,
    speedPct: 10,
    dmg: 24
  }
}]

export const createdBy = 'Ehya丶Calc'
