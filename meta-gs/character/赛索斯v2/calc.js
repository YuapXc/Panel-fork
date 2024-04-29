export const details = [{
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
  title: '[A+]贯影箭伤害',
  params: { Q: false,A: false,Da: false,Db: false,Dc: true},
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['贯影箭伤害'] * attr.atk / 100 + talent.a['贯影箭伤害2'] * attr.mastery / 100 , 'a2')
}, {
  title: '[A+]贯影箭激化伤害',
  params: { Q: false,A: false,Da: false,Db: false,Dc: true},
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['贯影箭伤害'] * attr.atk / 100 + talent.a['贯影箭伤害2'] * attr.mastery / 100 , 'a2', '超激化')
},{
  title: '[A+]暝弦矢一段伤害',
  dmgKey: 'AE1',
  params: { Q: true,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a2')
},{
  title: '[A+]暝弦矢一段激化伤害',
  dmgKey: 'AE1J',
  params: { Q: true,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a2', '超激化')
}, {
  title: '[A+]暝弦矢二段伤害',
  dmgKey: 'AE2',
  params: { Q: true,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['二段伤害'], 'a2')
},{
  title: '[A+]暝弦矢二段激化伤害',
  dmgKey: 'AE2J',
  params: { Q: true,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['二段伤害'], 'a2', '超激化')
}, {
  title: '[A+]暝弦矢三段伤害',
  dmgKey: 'AE3',
  params: { Q: true,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a2')
}, {
  title: '[A+]暝弦矢三段激化伤害',
  dmgKey: 'AE3J',
  params: { Q: true,A: false,Da: false,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a2', '超激化')
},{
  title: '[E]古仪·鸣砂掣雷伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]古仪·鸣砂掣雷激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', '超激化')
},{
  title: '[赛芙纳白-A+]贯影箭激化伤害',
  params: { Q: false,A: false,Da: true,Db: false,Dc: true},
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['贯影箭伤害'] * attr.atk / 100 + talent.a['贯影箭伤害2'] * attr.mastery / 100 , 'a2', '超激化')
}, {
  title: '[赛芙纳白-A+]暝弦矢一段激化伤害',
  dmgKey: 'AE1',
  params: { Q: true,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a2', '超激化')
}, {
  title: '[赛芙纳白-A+]暝弦矢二段激化伤害',
  dmgKey: 'AE2',
  params: { Q: true,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['二段伤害'], 'a2', '超激化')
}, {
  title: '[赛芙纳白-A+]暝弦矢三段激化伤害',
  dmgKey: 'AE3',
  params: { Q: true,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a2', '超激化')
}, {
  title: '[赛芙纳白-E]古仪·鸣砂掣雷激化伤害',
  params: { Q: true,A: false,Da: true,Db: false,Dc: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', '超激化')
}]

export const mainAttr = 'atk,cpct,cdmg,mastery'
export const defDmgKey = 'AE3J'

export const buffs = [{
  check: ({ cons, params }) => (cons > 5 && params.Da === true),
  title: '精1千夜2命4深林纳西妲：增加精通[mastery],减防[enemyDef]%',
  data: {
    mastery: 290,
    enemyDef: 30,
	kx: 0
  }
}, {
  check: ({ cons, params }) => (cons < 6 && params.Da === true),
  title: '精1千夜0命4深林纳西妲：增加精通[mastery]',
  data: {
    mastery: 290,
	kx: 0
  }
}, {
  check: ({ params , cons }) => ( cons < 3 ) && params.Da === true ,
  title: '0命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 52.5
  }
}, {
  check: ({ params , cons }) => ( ( cons < 6 && cons >= 3 ) && params.Da === true ) ,
  title: '1命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 70
  }
}, {
  check: ({ params , cons }) => ( cons >= 6 && params.Da === true ) ,
  title: '2命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 100
  }
},
{
  title: '白术天赋：[在地为化] 受到无郤气护盾治疗的角色触发的燃烧、绽放、超绽放、烈绽放反应造成的伤害提升[bloom]%',
  check: ({ params }) => params.Da === true,
  data: {
    bloom: 100
  }
},
{
  title: '白术4命：[山岚残芯] 施放愈气全形论之后,队伍中附近的所有角色元素精通提升[mastery]点',
  check: ({ params , cons }) => ( cons >= 6 && params.Da === true ),
  sort: 1,
  data: {
    mastery: 80
  }
}, {
  check: ({ params }) => params.Da === true,
  title: '白术-昔时之歌：触发后，普通攻击、重击、下落攻击、元素战技与元素爆发伤害提高1200点',
  sort: 9,
  data: {
    aPlus: 1200 ,
    a2Plus: 1200 ,
    a3Plus: 1200 ,
    ePlus: 1200 ,
    qPlus: 1200
  }
}, {
  check: ({ params }) => params.Da === true,
  title: '元素共鸣 蔓生之草(激化/激绽/烈绽队)：触发激化或超绽放烈绽放反应后，提升元素精通[mastery]点',
  data: {
    mastery: 100
  }
},{
  title: '寂想瞑影：获得[a2Plus]点暝弦矢伤害提升',
  check: ({ params }) => params.Q === true,
  data: {
    a2Plus: ({ attr, calc, talent }) => Math.min( calc(attr.mastery) * (talent.q['伤害提升'] *0.01)*0.01)
  }
},{
  title: '砂王的赐礼：贯影箭获得[a2Plus]点伤害提升',
  data: {
    a2Plus: ({ attr, calc}) => Math.min( calc(attr.mastery) * 6)
  }
},{
  check: ({ params , cons }) => ( cons > 0 && params.Dc === true ) ,
  title: '1命：贯影箭的暴击率提升15%。',
  data: {
    cpct: 15
  }
},{
  check: ({ cons }) => cons > 1 ,
  title: '2命：雷元素伤害加成提升15%',
  data: {
    dmg: 15
  }
},{
  check: ({ cons }) => cons > 3 ,
  title: '4命：雷元素伤害加成提升15%',
  data: {
    mastery: 80
  }
}]
