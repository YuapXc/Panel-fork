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
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
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
  title: '[A]刃轮巡猎一段伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎一段伤害'] / 100, 'a')
},{
  title: '[A]刃轮巡猎二段伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎二段伤害'] / 100, 'a')
},{
  title: '[A]刃轮巡猎三段伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎三段伤害'] / 100, 'a')
},{
  title: '[A]刃轮巡猎四段伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎四段伤害'] / 100, 'a')
},{
  title: '[A+]低空下落攻击伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['低空/高空坠地冲击伤害'][0] / 100, 'a3')
},{
  title: '[A+]高空下落攻击伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['低空/高空坠地冲击伤害'][1] / 100, 'a3')
},{
  title: '[A+]下落期间擦伤伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['下坠期间伤害'] / 100, 'a3')
},{
  title: '[E]突进伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['突进伤害'] / 100, 'e')
},{
  title: '[Q]燥烈的律动技能伤害',
  dmgKey: 'AE',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['技能伤害'] / 100, 'q')
},{
  title: '[Q]燥烈的律动追加节拍伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['追加节拍伤害'] / 100, 'q')
}, {
	title: '[Q]欢兴的律动治疗量',
	dmg: ({ talent, attr }, { heal }) => heal((attr.def * talent.q['持续治疗量'][0] / 100 + talent.q['持续治疗量'][1]) * 1)
},{
  title: '[结晶]护盾量',
  dmg: ({}, { reaction }) => reaction('crystallize')
},{
  title: '[希芙-A]刃轮巡猎一段伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎一段伤害'] / 100, 'a')
},{
  title: '[希芙-A]刃轮巡猎二段伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎二段伤害'] / 100, 'a')
},{
  title: '[希芙-A]刃轮巡猎三段伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎三段伤害'] / 100, 'a')
},{
  title: '[希芙-A]刃轮巡猎四段伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎四段伤害'] / 100, 'a')
},{
  title: '[希芙-A+]低空下落攻击伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['低空/高空坠地冲击伤害'][0] / 100, 'a3')
},{
  title: '[希芙-A+]高空下落攻击伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['低空/高空坠地冲击伤害'][1] / 100, 'a3')
},{
  title: '[希芙-A+]下落期间擦伤伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['下坠期间伤害'] / 100, 'a3')
},{
  title: '[希芙-E]突进伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['突进伤害'] / 100, 'e')
},{
  title: '[希芙-Q]燥烈的律动技能伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['技能伤害'] / 100, 'q')
},{
  title: '[希芙-Q]燥烈的律动追加节拍伤害',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['追加节拍伤害'] / 100, 'q')
}, {
	title: '[希芙-Q]欢兴的律动治疗量',
	params: { teamA: true,team: false,teamB: false },
	dmg: ({ talent, attr }, { heal }) => heal((attr.def * talent.q['持续治疗量'][0] / 100 + talent.q['持续治疗量'][1]) * 1)
},{
  title: '[希芙-结晶]护盾量',
  params: { teamA: true,team: false,teamB: false },
  dmg: ({}, { reaction }) => reaction('crystallize')
},{
  title: '[希芙万-A]刃轮巡猎一段伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎一段伤害'] / 100, 'a')
},{
  title: '[希芙万-A]刃轮巡猎二段伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎二段伤害'] / 100, 'a')
},{
  title: '[希芙万-A]刃轮巡猎三段伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎三段伤害'] / 100, 'a')
},{
  title: '[希芙万-A]刃轮巡猎四段伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎四段伤害'] / 100, 'a')
},{
  title: '[希芙万-A+]低空下落攻击伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['低空/高空坠地冲击伤害'][0] / 100, 'a3')
},{
  title: '[希芙万-A+]高空下落攻击伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['低空/高空坠地冲击伤害'][1] / 100, 'a3')
},{
  title: '[希芙万-A+]下落期间擦伤伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['下坠期间伤害'] / 100, 'a3')
},{
  title: '[希芙万-E]突进伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['突进伤害'] / 100, 'e')
},{
  title: '[希芙万-Q]燥烈的律动技能伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['技能伤害'] / 100, 'q')
},{
  title: '[希芙万-Q]燥烈的律动追加节拍伤害',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['追加节拍伤害'] / 100, 'q')
}, {
	title: '[希芙万-Q]欢兴的律动治疗量',
	params: { team: true,teamA: false,teamB: false },
	dmg: ({ talent, attr }, { heal }) => heal((attr.def * talent.q['持续治疗量'][0] / 100 + talent.q['持续治疗量'][1]) * 1)
},{
  title: '[希芙万-结晶]护盾量',
  params: { team: true,teamA: false,teamB: false },
  dmg: ({}, { reaction }) => reaction('crystallize')
},{
  title: '[希万钟-A]刃轮巡猎一段伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎一段伤害'] / 100, 'a')
},{
  title: '[希万钟-A]刃轮巡猎二段伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎二段伤害'] / 100, 'a')
},{
  title: '[希万钟-A]刃轮巡猎三段伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎三段伤害'] / 100, 'a')
},{
  title: '[希万钟-A]刃轮巡猎四段伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['刃轮巡猎四段伤害'] / 100, 'a')
},{
  title: '[希万钟-A+]低空下落攻击伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['低空/高空坠地冲击伤害'][0] / 100, 'a3')
},{
  title: '[希万钟-A+]高空下落攻击伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['低空/高空坠地冲击伤害'][1] / 100, 'a3')
},{
  title: '[希万钟-A+]下落期间擦伤伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.a['下坠期间伤害'] / 100, 'a3')
},{
  title: '[希万钟-E]突进伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['突进伤害'] / 100, 'e')
},{
  title: '[希万钟-Q]燥烈的律动技能伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['技能伤害'] / 100, 'q')
},{
  title: '[希万钟-Q]燥烈的律动追加节拍伤害',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['追加节拍伤害'] / 100, 'q')
}, {
	title: '[希万钟-Q]欢兴的律动治疗量',
	params: { teamB: true,team: false,teamA: false },
	dmg: ({ talent, attr }, { heal }) => heal((attr.def * talent.q['持续治疗量'][0] / 100 + talent.q['持续治疗量'][1]) * 1)
},{
  title: '[希万钟-结晶]护盾量',
  params: { teamB: true,team: false,teamA: false },
  dmg: ({}, { reaction }) => reaction('crystallize')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  check: ({ params , cons }) => ( cons < 1 ) && teamA === true ,
  title: '0命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 52.5
  }
}, {
  check: ({ params , cons }) => ( ( cons < 2 && cons >= 1 ) && teamA === true ) ,
  title: '1命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 70
  }
}, {
  check: ({ params , cons }) => ( cons >= 2 && teamA === true ) ,
  title: '2命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 100
  }
},{
  check: ({ params , cons }) => ( cons < 1 ) && team === true ,
  title: '0命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 52.5
  }
}, {
  check: ({ params , cons }) => ( ( cons < 2 && cons >= 1 ) && team === true ) ,
  title: '1命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 70
  }
}, {
  check: ({ params , cons }) => ( cons >= 2 && team === true ) ,
  title: '2命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 100
  }
},{
    check: ({ cons, params }) => cons <= 1 && team === true,
    title: '精1苍古0命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击',
    sort: 9,
    data: {
      aDmg: 16,
      a2Dmg: 16,
      a3Dmg: 16,
      dmg: 40,
      atkPct: 20
    }
}, {
    check: ({ cons, params }) => (cons < 6 && cons > 1 && team === true),
    title: '精1苍古2命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,精通[mastery]',
    sort: 9,
    data: {
      aDmg: 16,
      a2Dmg: 16,
      a3Dmg: 16,
      dmg: 48,
      atkPct: 20,
      mastery: 200
    }
}, {
    check: ({ cons, params }) => (cons >= 6 && team === true),
    title: '精5苍古6命万叶：获得[dmg]%增伤(苍古普攻32增伤)，增加[atkPct]%攻击,精通[mastery]',
    sort: 9,
    data: {
      aDmg: 32,
      a2Dmg: 32,
      a3Dmg: 32,
      dmg: 48,
      atkPct: 40,
      mastery: 200
    }
},{
    check: ({ cons, params }) => cons <= 1 && teamB === true,
    title: '精1苍古0命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击',
    sort: 9,
    data: {
      aDmg: 16,
      a2Dmg: 16,
      a3Dmg: 16,
      dmg: 40,
      atkPct: 20
    }
}, {
    check: ({ cons, params }) => (cons < 6 && cons > 1 && teamB === true),
    title: '精1苍古2命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,精通[mastery]',
    sort: 9,
    data: {
      aDmg: 16,
      a2Dmg: 16,
      a3Dmg: 16,
      dmg: 48,
      atkPct: 20,
      mastery: 200
    }
}, {
    check: ({ cons, params }) => (cons >= 6 && teamB === true),
    title: '精5苍古6命万叶：获得[dmg]%增伤(苍古普攻32增伤)，增加[atkPct]%攻击,精通[mastery]',
    sort: 9,
    data: {
      aDmg: 32,
      a2Dmg: 32,
      a3Dmg: 32,
      dmg: 48,
      atkPct: 40,
      mastery: 200
    }
},{
  check: ({ params }) => params.teamB === true,
  title: '钟离：降低敌人[kx]%全抗',
  data: {
    kx: 20
  }
},{
  check: ({ params }) => params.teamB === true,
  title: '双岩共鸣：敌人岩元素抗性降低20%,护盾强效提升15%,造成的伤害提升15%',
  data: {
    kx: 20,
    dmg: 15,
    shield: 15
  }
},{
  title: '源音采样：元素抗性降低[kx]%',
  data: {
    kx: ({ talent }) => talent.e['元素抗性降低'] * 1
  }
},{
  title: '四境四象回声：普通攻击与下落攻击,造成的伤害提升30%。',
  data: {
    admg: 30,
    a3dmg: 30
  }
},{
  title: '便携铠装护层：防御力提升20%。',
  data: {
    defPct: 20
  }
},{
  check: ({ cons }) => cons > 1,
  title: '2命：造成的伤害提升50%',
  data: {
    dmg: 50
  }
},{
  check: ({ cons }) => cons > 3,
  title: '4命：普通攻击、重击与下落攻击造成的伤害提升[a3Plus]点',
  data: {
    aPlus: ({ attr, calc }) => calc(attr.def) * 0.65,
    a3Plus: ({ attr, calc }) => calc(attr.def) * 0.65
  }
},{
  check: ({ cons }) => cons > 5,
  title: '6命：普通攻击、重击与下落攻击造成的伤害提升[a3Plus]点',
  data: {
    aPlus: ({ attr, calc }) => calc(attr.def) * 3,
    a3Plus: ({ attr, calc }) => calc(attr.def) * 3
  }
}]
