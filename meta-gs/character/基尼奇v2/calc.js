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
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
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
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[E]环绕射击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['环绕射击伤害'], 'e')
}, {
  title: '[E]环绕射击激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['环绕射击伤害'], 'e', '超激化')
},{
  title: '[E]0层·迴猎贯鳞炮伤害',
  params: { DA: false, DQ: false, C: true,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[E]0层·迴猎贯鳞炮激化伤害',
  params: { DA: false, DQ: false, C: true,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e', '超激化')
},{
  title: '[E]1层·迴猎贯鳞炮伤害',
  params: { DA: false, DQ: false, A: true,B: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[E]1层·迴猎贯鳞炮激化伤害',
  params: { DA: false, DQ: false, A: true,B: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e', '超激化')
},{
  title: '[E]2层·迴猎贯鳞炮伤害',
  params: { DA: false, DQ: false, B: true,A: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[E]2层·迴猎贯鳞炮激化伤害',
  params: { DA: false, DQ: false, B: true,A: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e', '超激化')
},{
  title: '[Q]解放圣龙力量伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q]解放圣龙力量激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', '超激化')
},{
  title: '[Q]激光伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['激光伤害'], 'q')
},{
  title: '[Q]激光激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['激光伤害'], 'q', '超激化')
},{
  title: '[基班艾钟-E]环绕射击伤害',
  params: { DA: true,DQ: false, C: false,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['环绕射击伤害'], 'e')
}, {
  title: '[基班艾钟-E]0层·迴猎贯鳞炮伤害',
  params: { DA: true,DQ: false, C: true,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[基班艾钟-E]1层·迴猎贯鳞炮伤害',
  params: { DA: true,DQ: false, A: true,B: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[基班艾钟-E]2层·迴猎贯鳞炮伤害',
  params: { DA: true,DQ: false, B: true,A: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e')
}, {
  title: '[基班艾钟-Q]解放圣龙力量伤害',
  params: { DA: true,DQ: false, C: false,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talen.q['技能伤害'], 'q')
},{
  title: '[基班艾钟-Q]激光伤害',
  params: { DA: true,DQ: false, C: false,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['激光伤害'], 'q')
},{
  title: '[基纳八钟-E]环绕射击激化伤害',
  params: { DA: false,DQ: true, C: false,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['环绕射击伤害'], 'e', '超激化')
}, {
  title: '[基纳八钟-E]0层·迴猎贯鳞炮激化伤害',
  params: { DA: false,DQ: true, C: true,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e', '超激化')
}, {
  title: '[基纳八钟-E]1层·迴猎贯鳞炮激化伤害',
  params: { DA: false,DQ: true, A: true,B: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e', '超激化')
}, {
  title: '[基纳八钟-E]2层·迴猎贯鳞炮激化伤害',
  params: { DA: false,DQ: true, B: true,A: false,C: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e', '超激化')
}, {
  title: '[基纳八钟-Q]解放圣龙力量激化伤害',
  params: { DA: false,DQ: true, C: false,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talen.q['技能伤害'], 'q', '超激化')
},{
  title: '[基纳八钟-Q]激光激化伤害',
  params: { DA: false,DQ: true, C: false,B: false,A: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['激光伤害'], 'q', '超激化')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  check: ({ params }) => params.DA === true,
  title: '风鹰宗室班：增加[atkPlus]点攻击力与[atkPct]%攻击力',
  data: {
    atkPct: 20,
    atkPlus: 1202.35
  }
},{
    check: ({ params }) => params.DA === true,
    title: '钟离：降低敌人[kx]%全抗',
    data: {
      kx: 20
    }
  }, {
    check: ({ params }) => params.DA === true,
    title: '钟离千岩套：攻击力提升[atkPct]%',
    data: {
      atkPct: 20
    }
  },{
  check: ({ params }) => params.DQ === true,
  title: '元素共鸣 蔓生之草(激化/激绽/烈绽队)：触发激化或超绽放烈绽放反应后，提升元素精通[mastery]点',
  data: {
    mastery: 100
  }
},{
    check: ({ params }) => params.DQ === true,
    title: '钟离：降低敌人[kx]%全抗',
    data: {
      kx: 20
    }
  }, {
    check: ({ params }) => params.DQ === true,
    title: '钟离千岩套：攻击力提升[atkPct]%',
    data: {
      atkPct: 20
    }
  },{
  check: ({ cons, params }) => (cons >= 4 && params.DQ === true),
  title: '精5千夜4命4深林纳西妲：增加精通[mastery],减防[enemyDef]%，降低[kx]%草元素抗性',
  data: {
    mastery: 418,
    enemyDef: 30,
	kx: 30
  }
}, {
  check: ({ cons, params }) => ((cons < 4 &&cons >= 2) && params.DQ === true),
  title: '精1千夜2命4深林纳西妲：增加精通[mastery],减防[enemyDef]%，降低[kx]%草元素抗性',
  data: {
    mastery: 290,
    enemyDef: 30,
	kx: 30
  }
}, {
  check: ({ params }) => (params.DQ === true),
  title: '精1终末菲谢尔：增加精通[mastery],攻击[atkPct]%',
  data: {
    mastery: 100,
    atkPct: 20
  }
}, {
  check: ({ cons, params }) => (cons < 2 && params.DQ === true),
  title: '精1千夜0命4深林纳西妲：增加精通[mastery]，降低[kx]%草元素抗性',
  data: {
    mastery: 290,
	kx: 30
  }
},{
  check: ({ params }) => params.A === true,
  title: '焰灵的契约：提升迴猎贯鳞炮造成的伤害[ePlus]点',
  data: {
    ePlus: ({ calc, attr }) => calc(attr.atk) * 3.2
  }
},{
  check: ({ params }) => params.B === true,
  title: '焰灵的契约：提升迴猎贯鳞炮造成的伤害[ePlus]点',
  data: {
    ePlus: ({ calc, attr }) => calc(attr.atk) * 6.4
  }
},{
  check: ({ params , cons }) => cons > 0 && params.C === true,
  title: '1命：迴猎贯鳞炮的暴击伤害提升100%',
  data: {
    cdmg: 100
  }
},{
  check: ({ params , cons }) => ( cons > 1 ),
  title: '2命：敌人的草元素抗性降低30%',
  data: {
    kx: 30
  }
},{
  check: ({ params , cons }) => cons > 1 && params.C === true,
  title: '2命：迴猎贯鳞炮造成的伤害提升100%',
  data: {
    dmg: 100
  }
},{
  check: ({ cons }) => cons > 3,
  title: '4命：向伟大圣龙致意造成的伤害提升70%。',
  data: {
    qdmg: 70
  }
}]
