export const details = [{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[A]轻轻敲醒沉睡的心灵-伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]格局打开-单体伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[E]强化战技-全体目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[E-解读:0]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'], 'e')
}, {
  title: '[E-解读:0]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'], 'e')
}, {
  title: '[Q-解读:0]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[E-解读:10]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 10), 'e')
}, {
  title: '[E-解读:10]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 10), 'e')
}, {
  title: '[Q-解读:10]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 10), 'q')
}, {
  title: '[E-解读:15]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 15), 'e')
}, {
  title: '[E-解读:15]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 15), 'e')
}, {
  title: '[Q-解读:15]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 15), 'q')
}, {
  title: '[E-解读:20]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 20), 'e')
}, {
  title: '[E-解读:20]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 20), 'e')
}, {
  title: '[Q-解读:20]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 20), 'q')
}, {
  title: '[E-解读:25]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 25), 'e')
}, {
  title: '[E-解读:25]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 25), 'e')
}, {
  title: '[Q-解读:25]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 25), 'q')
}, {
  title: '[E-解读:30]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 30), 'e')
}, {
  title: '[E-解读:30]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 30), 'e')
}, {
  title: '[Q-解读:30]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 30), 'q')
}, {
  title: '[E-解读:35]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 35), 'e')
}, {
  title: '[E-解读:35]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 35), 'e')
}, {
  title: '[Q-解读:35]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 35), 'q')
}, {
  title: '[E-解读:40]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 40), 'e')
}, {
  title: '[E-解读:40]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 40), 'e')
}, {
  title: '[Q-解读:40]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 40), 'q')
}, {
  title: '[E-解读:42]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 42), 'e')
}, {
  title: '[E-解读:42]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 42), 'e')
}, {
  title: '[Q-解读:42]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 42), 'q')
},{
  title: '[Q-解读:99]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 99), 'q')
},{
  title: '[双智识-A]轻轻敲醒沉睡的心灵-伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[双智识-E]格局打开-单体伤害',
  check: ({ cons }) => cons < 6,
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[双智识-E]强化战技-全体目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[双智识-E-解读:0]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'], 'e')
}, {
  title: '[双智识-E-解读:0]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'], 'e')
}, {
  title: '[双智识-Q-解读:0]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[双智识-E-解读:10]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 10), 'e')
}, {
  title: '[双智识-E-解读:10]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 10), 'e')
}, {
  title: '[双智识-Q-解读:10]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 10), 'q')
}, {
  title: '[双智识-E-解读:15]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 15), 'e')
}, {
  title: '[双智识-E-解读:15]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 15), 'e')
}, {
  title: '[双智识-Q-解读:15]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 15), 'q')
}, {
  title: '[双智识-E-解读:20]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 20), 'e')
}, {
  title: '[双智识-E-解读:20]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 20), 'e')
}, {
  title: '[双智识-Q-解读:20]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 20), 'q')
}, {
  title: '[双智识-E-解读:25]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 25), 'e')
}, {
  title: '[双智识-E-解读:25]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 25), 'e')
}, {
  title: '[双智识-Q-解读:25]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 25), 'q')
}, {
  title: '[双智识-E-解读:30]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 30), 'e')
}, {
  title: '[双智识-E-解读:30]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 30), 'e')
}, {
  title: '[双智识-Q-解读:30]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 30), 'q')
}, {
  title: '[双智识-E-解读:35]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 35), 'e')
}, {
  title: '[双智识-E-解读:35]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 35), 'e')
}, {
  title: '[双智识-Q-解读:35]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 35), 'q')
}, {
  title: '[双智识-E-解读:40]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 40), 'e')
}, {
  title: '[双智识-E-解读:40]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 40), 'e')
}, {
  title: '[双智识-Q-解读:40]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 40), 'q')
}, {
  title: '[双智识-E-解读:42]强化战技-主目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 42), 'e')
}, {
  title: '[双智识-E-解读:42]强化战技-相邻目标伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 42), 'e')
}, {
  title: '[双智识-Q-解读:42]早说了是魔法吧-伤害',
  dmgKey: 'AE',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 42), 'q')
}, {
  title: '[双智识-Q-解读:99]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 99), 'q')
},{
  title: '[A]轻轻敲醒沉睡的心灵-伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]格局打开-单体伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[E]强化战技-全体目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[E-解读:0]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'], 'e')
}, {
  title: '[E-解读:0]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'], 'e')
}, {
  title: '[Q-解读:0]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[E-解读:10]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 10), 'e')
}, {
  title: '[E-解读:10]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 10), 'e')
}, {
  title: '[Q-解读:10]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *10), 'q')
}, {
  title: '[E-解读:15]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 15), 'e')
}, {
  title: '[E-解读:15]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 15), 'e')
}, {
  title: '[Q-解读:15]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *15), 'q')
}, {
  title: '[E-解读:20]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 20), 'e')
}, {
  title: '[E-解读:20]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 20), 'e')
}, {
  title: '[Q-解读:20]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *20), 'q')
}, {
  title: '[E-解读:25]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 25), 'e')
}, {
  title: '[E-解读:25]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 25), 'e')
}, {
  title: '[Q-解读:25]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *25), 'q')
}, {
  title: '[E-解读:30]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 30), 'e')
}, {
  title: '[E-解读:30]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 30), 'e')
}, {
  title: '[Q-解读:30]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *30), 'q')
}, {
  title: '[E-解读:35]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 35), 'e')
}, {
  title: '[E-解读:35]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 35), 'e')
}, {
  title: '[Q-解读:35]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *35), 'q')
}, {
  title: '[E-解读:40]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 40), 'e')
}, {
  title: '[E-解读:40]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 40), 'e')
}, {
  title: '[Q-解读:40]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *40), 'q')
}, {
  title: '[E-解读:42]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + (talent.t['主目标倍率提高'] * 42), 'e')
}, {
  title: '[E-解读:42]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + (talent.t['其他目标倍率提高'] * 42), 'e')
}, {
  title: '[Q-解读:42]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *42), 'q')
},{
  title: '[Q-解读:99]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *99), 'q')
},{
  title: '[双智识-A]轻轻敲醒沉睡的心灵-伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[双智识-E]格局打开-单体伤害',
  check: ({ cons }) => cons > 5,
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[双智识-E]强化战技-全体目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[双智识-E-解读:0]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'], 'e')
}, {
  title: '[双智识-E-解读:0]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'], 'e')
}, {
  title: '[双智识-Q-解读:0]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[双智识-E-解读:10]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 10), 'e')
}, {
  title: '[双智识-E-解读:10]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 10), 'e')
}, {
  title: '[双智识-Q-解读:10]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *10), 'q')
}, {
  title: '[双智识-E-解读:15]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 15), 'e')
}, {
  title: '[双智识-E-解读:15]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 15), 'e')
}, {
  title: '[双智识-Q-解读:15]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *15), 'q')
}, {
  title: '[双智识-E-解读:20]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 20), 'e')
}, {
  title: '[双智识-E-解读:20]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 20), 'e')
}, {
  title: '[双智识-Q-解读:20]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *20), 'q')
}, {
  title: '[双智识-E-解读:25]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 25), 'e')
}, {
  title: '[双智识-E-解读:25]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 25), 'e')
}, {
  title: '[双智识-Q-解读:25]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *25), 'q')
}, {
  title: '[双智识-E-解读:30]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 30), 'e')
}, {
  title: '[双智识-E-解读:30]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 30), 'e')
}, {
  title: '[双智识-Q-解读:30]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *30), 'q')
}, {
  title: '[双智识-E-解读:35]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 35), 'e')
}, {
  title: '[双智识-E-解读:35]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 35), 'e')
}, {
  title: '[双智识-Q-解读:35]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *35), 'q')
}, {
  title: '[双智识-E-解读:40]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 40), 'e')
}, {
  title: '[双智识-E-解读:40]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 40), 'e')
}, {
  title: '[双智识-Q-解读:40]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *40), 'q')
}, {
  title: '[双智识-E-解读:42]强化战技-主目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + ((talent.t['主目标倍率额外提高'] + talent.t['主目标倍率提高']) * 42), 'e')
}, {
  title: '[双智识-E-解读:42]强化战技-相邻目标伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + ((talent.t['其他目标倍率额外提高'] + talent.t['其他目标倍率提高']) * 42), 'e')
}, {
  title: '[双智识-Q-解读:42]早说了是魔法吧-伤害',
  dmgKey: 'AE',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *42), 'q')
}, {
  title: '[双智识-Q-解读:99]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + (talent.t['终结技倍率提高'] * 5 *99), 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '视界外来信：暴击伤害提高80%',
  check: ({ params }) => params.tQ === true,
  data: {
    cdmg: 80
  }
},{
  title: '2层灵感：攻击力提高[atkPct]%',
  check: ({ params }) => params.tQ === true,
  data: {
    atkPct: ({ talent }) => talent.q['攻击力提高'] * 100
  }
},{
  title: '4命：速度提高10%。',
  cons: 4,
  data: {
    speedPct: 10
  }
},{
  title: '6命：【饥饿的地景】每层额外使终结技的伤害倍率提高4%，最多可额外使终结技的伤害倍率提高396%。',
  cons: 6,
  data: {
    speedPct: 0
  }
}]

export const createdBy = 'Ehya丶Calc'
