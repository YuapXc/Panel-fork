export const details = [{
  title: '触发特效后生命值',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '触发特效后治疗加成',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
    }
  }
},{
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[E]撷萃调香伤害',
  params: { S: true,teamA: false,team: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]撷萃调香激化伤害',
  params: { S: false,teamA: false,team: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', '超激化')
},{
  title: '[E]柔灯之匣·一阶攻击伤害',
  params: { S: true,teamA: false,team: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·一阶攻击伤害'], 'e')
},{
  title: '[E]柔灯之匣·一阶攻击激化伤害',
  params: { S: false,teamA: false,team: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·一阶攻击伤害'], 'e', '超激化')
},{
  title: '[E]柔灯之匣·二阶攻击伤害',
  params: { S: true,teamA: false,team: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·二阶攻击伤害'], 'e')
},{
  title: '[E]柔灯之匣·二阶攻击激化伤害',
  params: { S: false,teamA: false,team: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·二阶攻击伤害'], 'e', '超激化')
},{
  title: '[Q]柔灯之匣·三阶攻击伤害',
  params: { S: true,teamA: false,team: false },
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['柔灯之匣·三阶攻击伤害'], 'q')
},{
  title: '[Q]柔灯之匣·三阶攻击激化伤害',
  params: { S: false,teamA: false,team: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['柔灯之匣·三阶攻击伤害'], 'q', '超激化')
},{
  title: '[T]清露香氛伤害',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 500 / 100, 't')
},{
  title: '[T]清露香氛激化伤害',
  params: { S: true,teamA: false,team: false },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 500 / 100, 't', '超激化')
},{
  title: '燃烧每次伤害',
  params: { S: true,teamA: false,team: false },
  dmg: ({}, { reaction }) => reaction('burning')
},{
  title: '[艾班-E]撷萃调香伤害',
  params: { S: true,teamA: false,team: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[艾班-E]柔灯之匣·一阶攻击伤害',
  params: { S: true,teamA: false,team: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·一阶攻击伤害'], 'e')
},{
  title: '[艾班-E]柔灯之匣·二阶攻击伤害',
  params: { S: true,teamA: false,team: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·二阶攻击伤害'], 'e')
},{
  title: '[艾班-Q]柔灯之匣·三阶攻击伤害',
  params: { S: true,teamA: false,team: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['柔灯之匣·三阶攻击伤害'], 'q')
},{
  title: '[艾班-T]清露香氛伤害',
  params: { S: true,teamA: false,team: true },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 500 / 100, 't')
},{
  title: '[艾班]燃烧每次伤害',
  params: { S: true,teamA: false,team: true },
  dmg: ({}, { reaction }) => reaction('burning')
},{
  title: '[艾纳钟-E]撷萃调香激化伤害',
  params: { S: false,team: false,teamA: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[艾纳钟-E]柔灯之匣·一阶攻击激化伤害',
  params: { S: false,team: false,teamA: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·一阶攻击伤害'], 'e')
},{
  title: '[艾纳钟-E]柔灯之匣·二阶攻击激化伤害',
  params: { S: false,team: false,teamA: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·二阶攻击伤害'], 'e')
},{
  title: '[艾纳钟-Q]柔灯之匣·三阶攻击激化伤害',
  params: { S: false,team: false,teamA: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['柔灯之匣·三阶攻击伤害'], 'q')
},{
  title: '[艾纳钟-T]清露香氛激化伤害',
  params: { S: false,team: false,teamA: true },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 500 / 100, 't')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg,mastery'

export const buffs = [{
  check: ({ params }) => params.team === true,
  title: '风鹰宗室班：增加[atkPlus]点攻击力与[atkPct]%攻击力',
  sort: 9,
  data: {
    atkPct: 20,
    atkPlus: 1202.35
  }
},{
    check: ({ params }) => params.teamA === true,
    title: '钟离：降低敌人[kx]%全抗',
    data: {
      kx: 20
    }
  }, {
    check: ({ params }) => params.teamA === true,
    title: '钟离千岩套：攻击力提升[atkPct]%',
    data: {
      atkPct: 20
    }
  }, {
  check: ({ cons, params }) => (cons >= 4 && params.teamA === true),
  title: '精5千夜4命4深林纳西妲：增加精通[mastery],减防[enemyDef]%，降低[kx]%草元素抗性',
  data: {
    mastery: 418,
    enemyDef: 30,
	kx: 30
  }
}, {
  check: ({ cons, params }) => ((cons < 4 &&cons >= 2) && params.teamA === true),
  title: '精1千夜2命4深林纳西妲：增加精通[mastery],减防[enemyDef]%，降低[kx]%草元素抗性',
  data: {
    mastery: 290,
    enemyDef: 30,
	kx: 30
  }
},{
  check: ({ params }) => params.S === true,
  title: '天赋：对燃烧状态下的敌人造成的伤害提升36%',
  data: {
    dmg: 36
  }
},{
  check: ({ params , cons }) => ( cons > 0 ),
  title: '1命：撷萃调香与固有天赋「余薰」的清露香氛造成的伤害提升10%',
  data: {
    edmg: 10,
    tdmg: 10
  }
},{
  check: ({ params , cons }) => ( cons > 1 ),
  title: '2命：攻击力提升36%',
  data: {
    atkPct: 36
  }
},{
  check: ({ params , cons }) => ( cons > 5 ),
  title: '6命：提升造成的伤害[aPlus]点',
  data: {
    aPlus: ({ calc, attr }) => calc(attr.atk) * 2.5,
    ePlus: ({ calc, attr }) => calc(attr.atk) * 2.5,
    qPlus: ({ calc, attr }) => calc(attr.atk) * 2.5
  }
},
{title: '6.6最后修改：如有问题可联系3591754738反馈'}]