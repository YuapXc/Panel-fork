export const details = [{
  title: '克洛琳德暂不支持换生命之契',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
},{
  title: '当前生命之契',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.shield) * 1)
    }
  }
},{
  title: '触发特效后生命值',
  params: { Q: false,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { Q: false,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { Q: false,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { Q: false,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmgKey: 'AE',
  params: { Q: false,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  params: { Q: false,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { Q: false,A: false,Da: false,Db: false,Dc: false},
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
  title: '[E-狩夜之巡]驰猎A伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害A'], 'a')
},{
  title: '[E-狩夜之巡]驰猎A激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害A'], 'a', '超激化')
},{
  title: '[E-狩夜之巡]驰猎B伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害B'], 'a')
},{
  title: '[E-狩夜之巡]驰猎B激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害B'], 'a', '超激化')
},{
  title: '[E-狩夜之巡]贯夜A伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害A'], 'a')
},{
  title: '[E-狩夜之巡]贯夜A激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害A'], 'a', '超激化')
},{
  title: '[E-狩夜之巡]贯夜B伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害B'], 'a')
},{
  title: '[E-狩夜之巡]贯夜B激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害B'], 'a', '超激化')
},{
  title: '[E-狩夜之巡]贯夜C伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害C'], 'a')
},{
  title: '[E-狩夜之巡]贯夜C激化伤害',
  dmgKey: 'AEJ',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害C'], 'a', '超激化')
},{
  title: '[荒性]流涌之刃伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['流涌之刃伤害'], 'e')
},{
  title: '[荒性]流涌之刃激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['流涌之刃伤害'], 'e', '超激化')
},{
  title: '[Q]残光将终总伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[Q]残光将终激化总伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', '超激化')
},{
  check: ({ cons }) => cons >= 1,
  title: '[1命]夜巡之影协同攻击伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 30 / 100, 'a')
},{
  check: ({ cons }) => cons >= 1,
  title: '[1命]夜巡之影协同攻击激化伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 30 / 100, 'a','超激化')
},
{
  check: ({ cons }) => cons >= 6,
  title: '[6命]明烛之影追击伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 200 / 100, 'a')
},{
  check: ({ cons }) => cons >= 6,
  title: '[6命]明烛之影追击激化伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 200 / 100, 'a','超激化')
},{
  title: '[克芙万班-E-狩夜之巡]驰猎A伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害A'], 'a')
},{
  title: '[克芙万班-E-狩夜之巡]驰猎B伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害B'], 'a')
},{
  title: '[克芙万班-E-狩夜之巡]贯夜A伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害A'], 'a')
},{
  title: '[克芙万班-E-狩夜之巡]贯夜B伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害B'], 'a')
},{
  title: '[克芙万班-E-狩夜之巡]贯夜C伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害C'], 'a')
},{
  title: '[克芙万班-荒性]流涌之刃伤害伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['流涌之刃伤害'], 'e')
},{
  title: '[克芙万班-Q]残光将终总伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  check: ({ cons }) => cons >= 1,
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  title: '[克纳八钟-1命]夜巡之影协同攻击伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 30 / 100, 'a')
},
{
  check: ({ cons }) => cons >= 6,
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  title: '[克纳八钟-6命]明烛之影追击伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 200 / 100, 'a')
},{
  title: '[克纳八钟-E-狩夜之巡]驰猎A激化伤害',
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害A'], 'a', '超激化')
},{
  title: '[克纳八钟-E-狩夜之巡]驰猎B激化伤害',
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害B'], 'a', '超激化')
},{
  title: '[克纳八钟-E-狩夜之巡]贯夜A激化伤害',
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害A'], 'a', '超激化')
},{
  title: '[克纳八钟-E-狩夜之巡]贯夜B激化伤害',
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害B'], 'a', '超激化')
},{
  title: '[克纳八钟-E-狩夜之巡]贯夜C激化伤害',
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害C'], 'a', '超激化')
},{
  title: '[克纳八钟-荒性]流涌之刃伤害激化伤害',
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['流涌之刃伤害'], 'e', '超激化')
},{
  title: '[克纳八钟-Q]残光将终总激化伤害',
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', '超激化')
},{
  check: ({ cons }) => cons >= 1,
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  title: '[克纳八钟-1命]夜巡之影协同攻击激化伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 30 / 100, 'a','超激化')
},{
  check: ({ cons }) => cons >= 6,
  params: { Q: false,A: false,Db: true,Da: false,Dc: false},
  title: '[克纳八钟-6命]明烛之影追击激化伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 200 / 100, 'a','超激化')
},{
  title: '[克九万班-E-狩夜之巡]驰猎A伤害',
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害A'], 'a')
},{
  title: '[克九万班-E-狩夜之巡]驰猎B伤害',
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害B'], 'a')
},{
  title: '[克九万班-E-狩夜之巡]贯夜A伤害',
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害A'], 'a')
},{
  title: '[克九万班-E-狩夜之巡]贯夜B伤害',
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害B'], 'a')
},{
  title: '[克九万班-E-狩夜之巡]贯夜C伤害',
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害C'], 'a')
},{
  title: '[克九万班-荒性]流涌之刃伤害伤害',
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['流涌之刃伤害'], 'e')
},{
  title: '[克九万班-Q]残光将终总伤害',
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  check: ({ cons }) => cons >= 1,
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  title: '[克九万班-1命]夜巡之影协同攻击伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 30 / 100, 'a')
},
{
  check: ({ cons }) => cons >= 6,
  params: { Q: false,A: false,Dc: true,Da: false,Db: false},
  title: '[克九万班-6命]明烛之影追击伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 200 / 100, 'a')
}]

export const mainAttr = 'atk,cpct,cdmg'
export const defDmgKey = 'AE'

export const buffs = [{
  check: ({ params , cons }) => ( cons < 2 ) && params.Da === true ,
  title: '0命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 52.5
  }
}, {
  check: ({ params , cons }) => ( ( cons < 3 && cons >= 2 ) && params.Da === true ) ,
  title: '1命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 70
  }
}, {
  check: ({ params , cons }) => ( cons >= 3 && params.Da === true ) ,
  title: '2命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 100
  }
},{
    check: ({ cons, params }) => cons <= 1 && params.Da === true,
    title: '精1苍古0命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,减抗[kx]%',
    sort: 9,
    data: {
      aDmg: 16,
      a2Dmg: 16,
      a3Dmg: 16,
      dmg: 40,
      atkPct: 20,
      kx: 40
    }
}, {
    check: ({ cons, params }) => (cons < 6 && cons > 1 && params.Da === true),
    title: '精1苍古2命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
    sort: 9,
    data: {
      aDmg: 16,
      a2Dmg: 16,
      a3Dmg: 16,
      dmg: 48,
      atkPct: 20,
      kx: 40,
      mastery: 200
    }
}, {
    check: ({ cons, params }) => (cons >= 6 && params.Da === true),
    title: '精5苍古6命万叶：获得[dmg]%增伤(苍古普攻32增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
    sort: 9,
    data: {
      aDmg: 32,
      a2Dmg: 32,
      a3Dmg: 32,
      dmg: 48,
      atkPct: 40,
      kx: 40,
      mastery: 200
    }
},{
  check: ({ params }) => params.Da === true,
  title: '风鹰宗室班：增加[atkPlus]点攻击力与[atkPct]%攻击力',
  sort: 9,
  data: {
    atkPct: 20,
    atkPlus: 1202.35
  }
}, {
    check: ({ params }) => params.Db === true,
    title: '钟离：降低敌人[kx]%全抗',
    data: {
      kx: 20
    }
  }, {
    check: ({ params }) => params.Db === true,
    title: '钟离千岩套：攻击力提升[atkPct]%',
    data: {
      atkPct: 20
    }
  }, {
  check: ({ cons, params }) => (cons >= 4 && params.Db === true),
  title: '精5千夜4命4深林纳西妲：增加精通[mastery],减防[enemyDef]%，降低[kx]%草元素抗性',
  data: {
    mastery: 418,
    enemyDef: 30,
	kx: 30
  }
}, {
  check: ({ cons, params }) => ((cons < 4 &&cons >= 2) && params.Db === true),
  title: '精1千夜2命4深林纳西妲：增加精通[mastery],减防[enemyDef]%，降低[kx]%草元素抗性',
  data: {
    mastery: 290,
    enemyDef: 30,
	kx: 30
  }
}, {
  check: ({ cons, params }) => (cons < 2 && params.Db === true),
  title: '精1千夜0命4深林纳西妲：增加精通[mastery]，降低[kx]%草元素抗性',
  data: {
    mastery: 290,
	kx: 30
  }
}, {
  check: ({ params }) => params.Db === true,
  title: '元素共鸣 蔓生之草(激化/激绽/烈绽队)：触发激化或超绽放烈绽放反应后，提升元素精通[mastery]点',
  data: {
    mastery: 100
  }
},{
  check: ({ cons, params }) => cons <= 1 && params.Dc === true,
  title: '精1苍古0命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,减抗[kx]%',
  data: {
    aDmg: 16,
    a2Dmg: 16,
    a3Dmg: 16,
    dmg: 40,
    atkPct: 20,
    kx: 40
  }
}, {
  check: ({ cons, params }) => ((cons < 6 && cons > 1) && params.Dc === true),
  title: '精1苍古2命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
  data: {
    aDmg: 16,
    a2Dmg: 16,
    a3Dmg: 16,
    dmg: 48,
    atkPct: 20,
    kx: 40,
    mastery: 200
  }
}, {
  check: ({ cons, params }) => (cons >= 6 && params.Dc === true),
  title: '精5苍古6命万叶：获得[dmg]%增伤(苍古普攻32增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
  data: {
    aDmg: 32,
    a2Dmg: 32,
    a3Dmg: 32,
    dmg: 48,
    atkPct: 40,
    kx: 40,
    mastery: 200
  }
}, {
  check: ({ params }) => params.Dc === true,
  title: '宗室天空九条：增加[atkPlus]点攻击力与[cdmg]%爆伤,攻击[atkPct]%',
  data: {
    atkPlus: 794.2,
    cdmg: 60,
    atkPct: 20
  }
}, {
  check: ({ params }) => params.Dc === true,
  title: '风鹰班：增加[atkPlus]点攻击力与[atkPct]%攻击力',
  sort: 9,
  data: {
    atkPct: 0,
    atkPlus: 1202.35
  }
},{
  check: ({ cons }) => cons < 2,
  title: '破夜的明焰：普通攻击与残光将终造成的伤害提升[aPlus]点',
  data: {
    aPlus: ({ calc, attr}) => Math.min(1800, calc(attr.atk) * 0.20 * 3),
    qPlus: ({ calc, attr}) => Math.min(1800, calc(attr.atk) * 0.20 * 3)
  }
},{
  check: ({ cons }) => cons > 1,
  title: '破夜的明焰：普通攻击与残光将终造成的伤害提升[aPlus]点',
  data: {
    aPlus: ({ calc, attr}) => Math.min(2700, calc(attr.atk) * 0.3 * 3),
    qPlus: ({ calc, attr}) => Math.min(2700, calc(attr.atk) * 0.3 * 3)
  }
},{
  title: '契令的酬偿：暴击率提升20%',
  data: {
    cpct: 20
  }
},{
  title: '默认生命之契：100%',
  data: {
    shield: 0
  }
},{
  check: ( {cons }) => cons > 3,
  title: '4命：残光将终造成的伤害提升[qDmg]',
  data: {
    qDmg: ({ calc, attr}) => Math.min(200, calc(attr.shield) * 2)
  }
},{
  check: ( {cons }) => cons > 5,
  title: '6命：暴击率提升10%，暴击伤害提升70%',
  data: {
    cpct: 10,
    cdmg: 70
  }
}]
