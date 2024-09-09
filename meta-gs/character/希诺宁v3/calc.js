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
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
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
  title: '2命：暴击率提升30%',
  data: {
    cpct: 30
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
