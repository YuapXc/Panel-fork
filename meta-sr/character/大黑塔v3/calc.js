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
  title: '「状态:解读/谜底层数-0;智识队友-0」',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
},{
  title: '[A]轻轻敲醒沉睡的心灵-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]格局打开-单体伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[E]格局打开-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '[E]强化战技-主目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + talent.t['主目标倍率提高'] * 0 + talent.t['主目标倍率额外提高'] * 0, 'e')
}, {
  title: '[E]强化战技-相邻目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + talent.t['其他目标倍率提高'] * 0 + talent.t['其他目标倍率额外提高'] * 0, 'e')
}, {
  title: '[E]强化战技-全体目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 0, 'q')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 0 + talent.t['终结技倍率提高'] * 4, 'q')
}, {
  title: '「状态:解读/谜底层数-0;智识队友-1」',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
},{
  title: '[A]轻轻敲醒沉睡的心灵-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]格局打开-单体伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[E]格局打开-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '[E]强化战技-主目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + talent.t['主目标倍率提高'] * 0 + talent.t['主目标倍率额外提高'] * 0, 'e')
}, {
  title: '[E]强化战技-相邻目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + talent.t['其他目标倍率提高'] * 0 + talent.t['其他目标倍率额外提高'] * 0, 'e')
}, {
  title: '[E]强化战技-全体目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 0, 'q')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 0 + talent.t['终结技倍率提高'] * 4, 'q')
},{
  title: '「状态:解读/谜底层数-21;智识队友-0」',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
},{
  title: '[A]轻轻敲醒沉睡的心灵-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]格局打开-单体伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[E]格局打开-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '[E]强化战技-主目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + talent.t['主目标倍率提高'] * 21 + talent.t['主目标倍率额外提高'] * 21, 'e')
}, {
  title: '[E]强化战技-相邻目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + talent.t['其他目标倍率提高'] * 21 + talent.t['其他目标倍率额外提高'] * 21, 'e')
}, {
  title: '[E]强化战技-全体目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 21, 'q')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 21 + talent.t['终结技倍率提高'] * 4, 'q')
}, {
  title: '「状态:解读/谜底层数-21;智识队友-1」',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
},{
  title: '[A]轻轻敲醒沉睡的心灵-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]格局打开-单体伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[E]格局打开-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '[E]强化战技-主目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + talent.t['主目标倍率提高'] * 21 + talent.t['主目标倍率额外提高'] * 21, 'e')
}, {
  title: '[E]强化战技-相邻目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + talent.t['其他目标倍率提高'] * 21 + talent.t['其他目标倍率额外提高'] * 21, 'e')
}, {
  title: '[E]强化战技-全体目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 21, 'q')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 21 + talent.t['终结技倍率提高'] * 4, 'q')
},{
  title: '「状态:解读/谜底层数-42;智识队友-0」',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
},{
  title: '[A]轻轻敲醒沉睡的心灵-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]格局打开-单体伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[E]格局打开-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '[E]强化战技-主目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + talent.t['主目标倍率提高'] * 42 + talent.t['主目标倍率额外提高'] * 42, 'e')
}, {
  title: '[E]强化战技-相邻目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + talent.t['其他目标倍率提高'] * 42 + talent.t['其他目标倍率额外提高'] * 42, 'e')
}, {
  title: '[E]强化战技-全体目标伤害',
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 42, 'q')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 42 + talent.t['终结技倍率提高'] * 4, 'q')
}, {
  title: '「状态:解读/谜底层数-42;智识队友-1」',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
},{
  title: '[A]轻轻敲醒沉睡的心灵-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]格局打开-单体伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
}, {
  title: '[E]格局打开-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '[E]强化战技-主目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['主目标伤害'] + talent.t['主目标倍率提高'] * 42 + talent.t['主目标倍率额外提高'] * 42, 'e')
}, {
  title: '[E]强化战技-相邻目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'] + talent.t['其他目标倍率提高'] * 42 + talent.t['其他目标倍率额外提高'] * 42, 'e')
}, {
  title: '[E]强化战技-全体目标伤害',
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.e2['全体目标伤害'], 'e')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 42, 'q')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 42 + talent.t['终结技倍率提高'] * 4, 'q')
}, {
  title: '「状态:谜底层数-99;智识队友-0」',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 99, 'q')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: false, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 99 + talent.t['终结技倍率提高'] * 4, 'q')
}, {
  title: '「状态:谜底层数-99;智识队友-1」',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons < 6,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 99, 'q')
}, {
  title: '[Q]早说了是魔法吧-伤害',
  check: ({ cons }) => cons > 5,
  params: { Q: true,tQ: true, team: false, teamA: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.t['终结技倍率提高'] * 99 + talent.t['终结技倍率提高'] * 4, 'q')
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
  check: ({ params }) => params.Q === true,
  data: {
    atkPct: ({ talent }) => talent.q['攻击力提高'] * 100
  }
},{
  title: '4命：速度提高12%。',
  cons: 4,
  data: {
    speedPct: 12
  }
},{
  title: '6命：大黑塔的冰属性抗性穿透提高20%，当场上敌方目标数量等于3或以上/2/1名时，终结技的伤害倍率提高140%/250%/400%。',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
