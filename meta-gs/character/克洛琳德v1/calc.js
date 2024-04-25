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
  title: '[E-狩夜之巡]驰猎B伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害B'], 'a')
},{
  title: '[E-狩夜之巡]贯夜A伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害A'], 'a')
},{
  title: '[E-狩夜之巡]贯夜B伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害B'], 'a')
},{
  title: '[E-狩夜之巡]贯夜C伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害C'], 'a')
},{
  title: '[荒性]流涌之刃伤害伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['流涌之刃伤害'], 'e')
},{
  title: '[Q]残光将终伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
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
  title: '[克芙万班-Q]残光将终伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
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
},{
  check: ({ cons }) => cons < 2,
  title: '破夜的明焰：普通攻击与残光将终造成的伤害提升[aPlus]点',
  data: {
    aPlus: ({ calc, attr}) => Math.min(1530, calc(attr.atk) * 0.17 * 3),
    qPlus: ({ calc, attr}) => Math.min(1530, calc(attr.atk) * 0.17 * 3)
  }
},{
  check: ({ cons }) => cons > 1,
  title: '破夜的明焰：普通攻击与残光将终造成的伤害提升[aPlus]点',
  data: {
    aPlus: ({ calc, attr}) => Math.min(2160, calc(attr.atk) * 0.24 * 3),
    qPlus: ({ calc, attr}) => Math.min(2160, calc(attr.atk) * 0.24 * 3)
  }
},{
  title: '契令的酬偿：暴击率提升20%',
  data: {
    cpct: 20
  }
},{
  title: '默认生命之契：100%',
  data: {
    shield: 100
  }
},{
  check: ( {cons }) => cons > 3,
  title: '4命：普通攻击与残光将终造成的伤害提升[aPlus]点',
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
