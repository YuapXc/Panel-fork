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
  title: '[A]踏破征途的誓言伤害',
  params: { XC: false , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
},{
  title: '[E]万死无悔主目标伤害',
  params: { XC: false , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['目标伤害'] * attr.hp, 'e')
},{
  title: '[E]万死无悔相邻目标伤害',
  params: { XC: false , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['相邻目标伤害'] * attr.hp, 'e')
},{
  title: '[Q]诛天焚骨的王座主目标伤害',
  params: { XC: false , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['目标伤害'] * attr.hp, 'q')
},{
  title: '[Q]诛天焚骨的王座相邻目标伤害',
  params: { XC: false , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['相邻目标伤害'] * attr.hp, 'q')
},{
  title: '[血仇]当前生命值上限',
  params: { XC: true , A: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
},{
  title: '[血仇]累计已损失生命值',
  params: { XC: true , A: false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1.8)
    }
  }
},{
  title: '[E]弑王成王主目标伤害',
  params: { XC: true , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['目标伤害'] * attr.hp, 'e')
},{
  title: '[E]弑王成王相邻目标伤害',
  params: { XC: true , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['相邻目标伤害'] * attr.hp, 'e')
},{
  title: '[E]弑神登神主目标伤害',
  dmgKey: 'AE',
  params: { XC: true , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['目标伤害'] * attr.hp + talent.e2['目标伤害'] * attr.hp * 1.8, 'e')
},{
  title: '[E]弑神登神相邻目标伤害',
  params: { XC: true , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.e2['相邻目标伤害'] * attr.hp + talent.e2['相邻目标伤害'] * attr.hp * 1.8, 'e')
},{
  title: '[Q]诛天焚骨的王座主目标伤害',
  params: { XC: true , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['目标伤害'] * attr.hp, 'q')
},{
  title: '[Q]诛天焚骨的王座相邻目标伤害',
  params: { XC: true , A: false},
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['相邻目标伤害'] * attr.hp, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ calc, attr }) => calc(attr.hp) > 5000 ,
  title: '血祥罩衫：暴击率提高[cpct]%',
  data: {
    cpct: ({ calc, attr }) => Math.min(48, (calc(attr.hp) - 5000 ) / 100 * 1.8)
 }
}, {
  check: ({ params,cons}) => params.XC === true && cons < 6,
  title: '血仇：生命上限提高[hpPlus]点',
  data: {
    hpPlus: ({ talent, attr }) => attr.hp * 0.5
 }
}, {
  check: ({ params }) => params.XC === true,
  title: '血仇：无视敌方目标12%的防御力',
  cons: 1,
  data: {
    ignore: 12
 }
}, {
  check: ({ params }) => params.XC === true,
  title: '血仇：暴击伤害提高30%',
  cons: 4,
  data: {
    cdmg: 30
 }
}, {
  check: ({ params }) => params.XC === true,
  title: '血仇：生命上限提高[hpPlus]点',
  cons: 6,
  data: {
    hpPlus: ({ talent, attr }) => attr.hp * 1.5
 }
}]

export const createdBy = 'Ehya丶Calc'
