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
}, {
  title: '[A1]角力搏摔一段伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
}, {
  title: '[A2]角力搏摔二段伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['二段伤害'], 'a')
}, {
  title: '[A3]角力搏摔三段伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a')
}, {
  title: '[A+]角力搏摔重击伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: '[A-]角力搏摔下坠期间伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['下坠期间伤害'], 'a2')
}, {
  title: '[A-]角力搏摔低空下落伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][0], 'a3')
}, {
  title: '[A-]角力搏摔高空下落伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a3')
}, {
  title: '[E]夜虹逐跃突进伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.e['突进伤害'], 'e')
}, {
  title: '[Q]闪烈降临飞踢伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.q['飞踢伤害'], 'q')
}, {
  title: '[A1]角力搏摔一段激化伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a', 'aggravate')
}, {
  title: '[A2]角力搏摔二段激化伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['二段伤害'], 'a', 'aggravate')
}, {
  title: '[A3]角力搏摔三段激化伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a', 'aggravate')
}, {
  title: '[A+]角力搏摔重击激化伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2', 'aggravate')
}, {
  title: '[A-]角力搏摔下坠期间激化伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['下坠期间伤害'], 'a2', 'aggravate')
}, {
  title: '[A-]角力搏摔低空下落激化伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][0], 'a3', 'aggravate')
}, {
  title: '[A-]角力搏摔高空下落激化伤害',
  dmgKey: 'AE',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a3', 'aggravate')
}, {
  title: '[E]夜虹逐跃突进激化伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.e['突进伤害'], 'e', 'aggravate')
}, {
  title: '[Q]闪烈降临飞踢激化伤害',
  params: {HSBL:true,CRJQ:false,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.q['飞踢伤害'], 'q', 'aggravate')
}, {
  title: '[炽热激情状态/A1]角力搏摔一段伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态一段伤害'], 'a')
}, {
  title: '[炽热激情状态/A2]角力搏摔二段伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态二段伤害'], 'a')
}, {
  title: '[炽热激情状态/A3]角力搏摔三段伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态三段伤害'], 'a')
}, {
  title: '[炽热激情状态/A+]角力搏摔重击伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态重击伤害'], 'a2')
}, {
  title: '[炽热激情状态/A-]角力搏摔下坠期间伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态下坠期间伤害'], 'a2')
}, {
  title: '[炽热激情状态/A-]角力搏摔低空下落伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][0], 'a3')
}, {
  title: '[炽热激情状态/A-]角力搏摔高空下落伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a3')
}, {
  title: '[炽热激情状态/E]夜虹逐跃突进伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.e['突进伤害'], 'e')
}, {
  title: '[炽热激情状态/Q]大火山崩落伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.q['「大火山崩落」伤害'], 'a3')
}, {
  title: '[炽热激情状态/A1]角力搏摔一段激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态一段伤害'], 'a', 'aggravate')
}, {
  title: '[炽热激情状态/A2]角力搏摔二段激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态二段伤害'], 'a', 'aggravate')
}, {
  title: '[炽热激情状态/A3]角力搏摔三段激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态三段伤害'], 'a', 'aggravate')
}, {
  title: '[炽热激情状态/A+]角力搏摔重击激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态重击伤害'], 'a2', 'aggravate')
}, {
  title: '[炽热激情状态/A-]角力搏摔下坠期间激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['炽热激情状态下坠期间伤害'], 'a2', 'aggravate')
}, {
  title: '[炽热激情状态/A-]角力搏摔低空下落激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][0], 'a3', 'aggravate')
}, {
  title: '[炽热激情状态/A-]角力搏摔高空下落激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a3', 'aggravate')
}, {
  title: '[炽热激情状态/E]夜虹逐跃突进激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.e['突进伤害'], 'e', 'aggravate')
}, {
  title: '[炽热激情状态/Q]大火山崩落激化伤害',
  params: {HSBL:false,CRJQ:true,team:false,teamA:false},
  dmg: ({ talent }, dmg) => dmg(talent.q['「大火山崩落」伤害'], 'a3', 'aggravate')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,heal'

export const buffs = [{
  title: '英雄，二度归来！：攻击力提升[atkPct]%',
  data: {
    atkPct: 70
  }
},{
  check: ({ params , cons }) => cons > 3 && params.HSBL === true,
  title: '4命：不处于炽热激情状态或极限驱动状态-下落攻击坠地冲击造成的伤害提升[a3Plus]点',
  data: {
    a3Plus: ({ attr }) => Math.min(attr.atk * 5, 20000)
  }
},{
  check: ({ params , cons }) => cons > 3 && params.CRJQ === true,
  title: '4命：处于炽热激情状态或极限驱动状态-本次元素爆发闪烈降临！造成的伤害提升100%。',
  data: {
    qDmg: 100
  }
},{
  title: '6命：瓦雷莎的下落攻击与元素爆发闪烈降临！的暴击率提升10%，暴击伤害提升100%。',
  cons: 6,
  data: {
    a3cpct: 10,
    a3cdmg: 100,
    qcpct: 10,
    qcdmg: 100
  }
}]

export const createdBy = 'Ehya丶Calc'
